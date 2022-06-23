import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/types';

@Component({
  selector: 'app-users-create-update',
  templateUrl: './users-create-update.component.html',
  styleUrls: ['./users-create-update.component.less']
})
export class UsersCreateUpdateComponent implements OnInit {
  isCreate = false;
  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    role: new FormControl(0),
  })

  get email_error() {
    return this.userForm.get('email')?.hasError('required') ? 'Email is required' :
      this.userForm.get('email')?.hasError('email') ? 'Not a valid email' : undefined;
  }

  get password_error() {
    return this.userForm.get('password')?.hasError('required') ? 'Password is required' :
      this.userForm.get('password')?.hasError('minlength') ? 'Password must be at least 8 characters long' : undefined;
  }

  get button_disabled() {
    return this.userForm.invalid
  }

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.isCreate = (data as any).type === 'create';
    })

    if (!this.isCreate) {
      this.fetchUser();
    }
  }

  onStatusChange(event: MatSlideToggleChange) {
    this.userForm.setValue({ ...this.userForm.value, role: event.checked ? 1 : 0 })
  }

  fetchUser() {
    this.http.get<User>('http://localhost:3000/users/' + this.route.snapshot.params["id"]).subscribe(user => {
      delete (user as any)["id"]
      delete (user as any)["password"]
      this.userForm.setValue({ ...user, password: '' })

      console.log(user)
    })
  }

  onSubmit() {
    if (this.isCreate) {
      this.http.post<User>('http://localhost:3000/users', this.userForm.value).subscribe(() => {
        alert("User created successfully")
        this.router.navigateByUrl("/admin/users")
      })
    } else {
      this.http.put<User>('http://localhost:3000/users/' + this.route.snapshot.params["id"], this.userForm.value).subscribe(() => {
        alert("User updated successfully")
        this.router.navigateByUrl("/admin/users")
      })
    }
  }
}

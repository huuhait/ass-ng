import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  formRegister = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirm_password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      (control: AbstractControl): ValidationErrors | null => {
        const password = control.parent?.get("password")?.value

        if (password !== control.value) {
          return {
            confirm_password: true
          }
        }

        return null
      }
    ]),
  })

  constructor(public http: HttpClient, private router: Router, public authService: AuthService) {
  }

  get email_error() {
    const errors = this.formRegister.get("email")?.errors

    if (!errors) {
      return
    }

    if (errors["required"]) {
      return "Email is required"
    }

    if (errors["email"]) {
      return "Email is not valid"
    }

    return 
  }

  get password_error() {
    const errors = this.formRegister.get("password")?.errors

    if (!errors) {
      return
    }

    if (errors["required"]) {
      return "Password is required"
    }

    if (errors["minlength"]) {
      return "Password must be at least 8 characters"
    }

    return
  }

  get confirm_password_error() {
    const errors = this.formRegister.get("confirm_password")?.errors

    if (!errors) {
      return
    }

    if (errors["required"]) {
      return "Password is required"
    }

    if (errors["minlength"]) {
      return "Password must be at least 8 characters"
    }

    if (errors["confirm_password"]) {
      return "Confirm password must be same with password"
    }

    return
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.register(this.formRegister.get("email")?.value, this.formRegister.get("password")?.value)
  }
}

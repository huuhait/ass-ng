import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  get email_error() {
    const errors = this.formLogin.get("email")?.errors

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
    const errors = this.formLogin.get("password")?.errors

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

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.email_error)
  }
}

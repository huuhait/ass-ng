import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  formRegister = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirm_password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

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

    if (this.formRegister.get("password")?.value !== this.formRegister.get("confirm_password")?.value) {
      return "Confirm password must be same with password"
    }

    return
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}

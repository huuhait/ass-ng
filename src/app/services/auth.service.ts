import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  accessToken!: {
    accessToken?: string, user?: User
  }

  constructor(private http: HttpClient, private router: Router) {
    this.accessToken = JSON.parse(localStorage.getItem('jwt') || '{}')
  }

  get IsLoggedIn() {
    return !!this.accessToken.user
  }

  get email() {
    return this.accessToken?.user?.email
  }

  get isAdmin() {
    return this.accessToken?.user?.role == 1
  }

  setAccessToken(accessToken: any) {
    this.accessToken = accessToken
    localStorage.setItem('jwt', JSON.stringify(accessToken))
  }

  login(email: string, password: string) {
    this.http.post<{ accessToken: string, user: { email: string } }>("http://localhost:3000/login", {
      email,
      password
    }).subscribe(data => {
      alert("Đăng nhập thành công")

      this.setAccessToken(data)
      this.router.navigateByUrl("/")
    })
  }

  register(email: string, password: string) {
    this.http.post<{ accessToken: string, user: { email: string } }>("http://localhost:3000/register", {
      email,
      password
    }).subscribe(data => {
      alert("Đăng ký thành công")

      this.setAccessToken(data)
      this.router.navigateByUrl("/")
    })
  }

  logout() {
    this.accessToken = {}
    localStorage.removeItem('jwt')
  }
}

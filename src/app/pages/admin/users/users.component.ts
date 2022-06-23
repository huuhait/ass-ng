import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/types';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<User[]>('http://localhost:3000/users').subscribe(users => {
      this.users = users;
    })
  }

  onUserStatusChange(user: User, e: {checked: boolean}) {
    this.http.put<User>('http://localhost:3000/users/' + user.id, { ...user, role: e.checked ? 1 : 0 }).subscribe(() => {
      alert("User updated successfully")
    })
  }

  onUserDelete(user: User) {
    this.http.delete<User>('http://localhost:3000/users/' + user.id).subscribe(() => {
      alert("Product deleted successfully")

      this.users = this.users.filter(p => p.id !== user.id);
    })
  }
}

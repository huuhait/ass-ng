import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  formSearch = new FormGroup({
    search: new FormControl('')
  })

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSearch() {
    const search = this.formSearch.get("search")?.value

    this.router.navigateByUrl(`/search?name=${search}`)
  }
}

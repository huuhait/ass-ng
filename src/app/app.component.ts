import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  currentRoute = "/"

  constructor(private router: Router) {
    // listen to events from Router
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // event is an instance of NavigationEnd, get url!
        const url = event.urlAfterRedirects;
        this.currentRoute = url
      }
    });
  }
}

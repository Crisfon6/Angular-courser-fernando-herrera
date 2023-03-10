import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { Auth } from '../../../auth/interface/auth.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .container {
        margin: 10px;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}
  get auth() {
    return this.authService.auth;
  }
  ngOnInit(): void {}
  logout() {
    this.authService.logout();

    this.router.navigate(['./auth']);
  }
}

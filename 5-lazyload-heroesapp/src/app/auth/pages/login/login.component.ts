import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}
  id!: number;
  ngOnInit(): void {}
  login() {
    this.authService.login(this.id).subscribe((d) => {
      if (d.id) {
        this.router.navigate(['./heroes']);
      }
    });
  }
}

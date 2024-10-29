import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor (private router: Router, private auth: AuthService) {}

  ngOnInit(): void {

  }

  goToHome () {
    this.router.navigate(['Home']);
  }

  logout () {
    this.auth.logout();
  }
}

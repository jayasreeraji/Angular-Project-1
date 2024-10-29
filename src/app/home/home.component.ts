import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  trendingMovies: any;

  constructor (private http: HttpClient) {}

  ngOnInit(): void {
    this.getTrendingMovies();
  }

  getTrendingMovies () {
    this.http.get('http://localhost:4200/assets/data/trending-movies.json')
    .subscribe((movies) => {
    this.trendingMovies = movies;
    console.log(this.trendingMovies);
  });
  }
}

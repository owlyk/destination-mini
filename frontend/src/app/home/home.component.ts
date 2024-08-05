package app.home;

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  title: string;
  navigationLinks: any[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/api/home').subscribe(data => {
      this.title = data.title;
      this.navigationLinks = data.navigationLinks;
    });
  }
}
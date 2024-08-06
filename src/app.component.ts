package app;

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  result: string;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getFibonacci(n: string): void {
    this.http.get(`/fib/${n}`).subscribe(
      (response: any) => {
        this.result = response.result;
      },
      (error) => {
        this.result = error.error.message;
      }
    );
  }
}
package app.fibUsage;

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fib-usage',
  templateUrl: './fib-usage.component.html',
  styleUrls: ['./fib-usage.component.css']
})
export class FibUsageComponent implements OnInit {
  usageInstructions: string;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchUsageInstructions();
  }

  fetchUsageInstructions(): void {
    this.http.get<string>('api/usage-instructions').subscribe(
      data => {
        this.usageInstructions = data;
      },
      error => {
        this.usageInstructions = 'Error fetching usage instructions.';
      }
    );
  }
}
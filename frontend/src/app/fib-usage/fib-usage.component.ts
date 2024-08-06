package app.fibUsage;

import { Component, OnInit } from '@angular/core';
import { FibUsageService } from './fib-usage.service';

@Component({
  selector: 'app-fib-usage',
  templateUrl: './usage.html',
  styleUrls: ['./fib-usage.component.css']
})
export class FibUsageComponent implements OnInit {
  instructions: string;
  errorMessage: string;

  constructor(private fibUsageService: FibUsageService) {
    this.instructions = 'Please enter a positive integer for Fibonacci calculations. Acceptable formats include integers and scientific notation. The output will be a list of Fibonacci numbers.';
    this.errorMessage = '';
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.fibUsageService.getData().subscribe(
      data => {
        // Handle the data received from the service
      },
      error => {
        this.errorMessage = 'An error occurred while fetching data.';
      }
    );
  }
}
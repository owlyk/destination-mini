package app.fibUsage;

import { Component, OnInit } from '@angular/core';
import { FibUsageService } from '../services/fib-usage.service';

@Component({
  selector: 'app-fib-usage',
  templateUrl: './fib-usage.component.html',
  styleUrls: ['./fib-usage.component.css']
})
export class FibUsageComponent implements OnInit {
  errorMessage: string = '';
  usageInstructions: string = '';

  constructor(private fibUsageService: FibUsageService) {}

  ngOnInit(): void {
    this.fetchUsageInstructions();
  }

  fetchUsageInstructions(): void {
    this.fibUsageService.getUsageInstructions().subscribe({
      next: (data) => {
        this.usageInstructions = this.formatUsageInstructions(data.instructions);
      },
      error: (error) => {
        this.handleError(error);
      }
    });
  }

  handleError(error: any): void {
    this.errorMessage = 'An error occurred while fetching usage instructions: ' + error.message;
  }

  formatUsageInstructions(instructions: string): string {
    return `
      Usage Instructions for Fibonacci Calculator:
      - Acceptable Input Formats: Integers, Scientific Notation
      - Constraints: Must be a positive integer
      - Maximum Limit: Truncation after 10,000 numbers
      - Additional Info: ${instructions}
    `;
  }
}
package app.fib_usage;

import { Component, OnInit } from '@angular/core';
import { FibUsageService } from '../services/fib-usage.service';

@Component({
  selector: 'app-fib-usage',
  templateUrl: './fib-usage.component.html',
  styleUrls: ['./fib-usage.component.css']
})
export class FibUsageComponent implements OnInit {
  usageInstructions: string;
  errorMessage: string;

  constructor(private fibUsageService: FibUsageService) {}

  ngOnInit(): void {
    this.fetchUsageInstructions();
  }

  fetchUsageInstructions(): void {
    this.fibUsageService.getUsageInstructions().subscribe(
      data => {
        this.usageInstructions = data;
      },
      error => {
        this.errorMessage = 'Error fetching usage instructions. Please try again later.';
      }
    );
  }
}
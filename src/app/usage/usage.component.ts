package app.usage;

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.css']
})
export class UsageComponent implements OnInit {
  instructions: string;
  examples: string[];
  explanation: string;

  constructor() {
    this.instructions = "The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones.";
    this.examples = ["0, 1, 1, 2, 3, 5, 8, 13, 21, 34", "F(0) = 0, F(1) = 1, F(2) = 1, F(3) = 2"];
    this.explanation = "In mathematical terms, the sequence is defined by the recurrence relation F(n) = F(n-1) + F(n-2) with seed values F(0) = 0 and F(1) = 1.";
  }

  ngOnInit(): void {
    this.makeResponsive();
    this.optimizeLoading();
    this.ensureAccessibility();
  }

  makeResponsive(): void {
    // Implementation for responsive design
  }

  optimizeLoading(): void {
    // Implementation for quick loading optimizations
  }

  ensureAccessibility(): void {
    // Implementation for accessibility features
  }
}
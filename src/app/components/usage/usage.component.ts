package app.components.usage;

import { Component } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.css']
})
export class UsageComponent {
  usageInstructions: string;

  constructor() {
    this.usageInstructions = 'Enter a number to receive the corresponding Fibonacci sequence.';
  }

  fetchUsageInstructions(): string {
    return this.usageInstructions;
  }
}
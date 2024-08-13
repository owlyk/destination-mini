package src;

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usage',
  template: `
    <div>
      <h1>Usage Instructions</h1>
      <p>Enter a non-negative integer to calculate its Fibonacci number. The application will return the Fibonacci series up to that number.</p>
    </div>
  `
})
export class UsageComponent {
  constructor(private router: Router) {}
}
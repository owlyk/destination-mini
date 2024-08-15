package app.components.usage;

import { Component } from '@angular/core';

@Component({
  selector: 'app-usage',
  template: `
    <h1>Fibonacci Calculator Usage Instructions</h1>
    <p>To use the Fibonacci calculator, follow these steps:</p>
    <ol>
      <li>Enter a non-negative integer in the input field.</li>
      <li>Click the "Calculate" button to generate the Fibonacci sequence.</li>
      <li>The result will be displayed below the input field.</li>
      <li>If the input is invalid, an error message will be shown.</li>
    </ol>
  `,
  styles: [`
    h1 {
      font-size: 24px;
      margin-bottom: 16px;
    }
    p {
      font-size: 16px;
    }
    ol {
      margin-left: 20px;
    }
  `]
})
export class UsageComponent {}
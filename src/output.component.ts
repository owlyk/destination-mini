package src;

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.html'
})
export class OutputComponent {
  @Input() inputNumber: number;
  @Input() fibonacciSeries: number[];
  @Input() message: string;

  getFormattedOutput(): string {
    return `Fibonacci series for ${this.inputNumber}: ${this.fibonacciSeries.join(', ')}`;
  }
}
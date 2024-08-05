import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  fibonacciSeries: number[] = [];

  constructor() {
    this.generateFibonacciSeries();
  }

  generateFibonacciSeries() {
    let n = 10;
    let num1 = 0, num2 = 1;
    let nextTerm;

    for (let i = 1; i <= n; i++) {
      this.fibonacciSeries.push(num1);
      nextTerm = num1 + num2;
      num1 = num2;
      num2 = nextTerm;
    }
  }
}
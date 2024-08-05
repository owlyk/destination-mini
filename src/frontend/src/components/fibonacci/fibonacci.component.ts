import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  inputValue: number;
  fibonacciSequence: number[] = [];

  calculateFibonacci() {
    this.fibonacciSequence = [];
    let a = 0, b = 1, nextTerm;

    for (let i = 1; i <= this.inputValue; i++) {
      this.fibonacciSequence.push(a);
      nextTerm = a + b;
      a = b;
      b = nextTerm;
    }
  }
}
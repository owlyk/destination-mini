package my-fib;

import { Component } from '@angular/core';

@Component({
  selector: 'app-my-fib',
  templateUrl: './my-fib.component.html',
  styleUrls: ['./my-fib.component.css']
})
export class MyFibComponent {
  userInput: number;
  fibNumbers: number[];
  message: string;

  calculateFibonacci() {
    if (Number.isInteger(this.userInput) && this.userInput > 0) {
      this.fibNumbers = this.fibList(this.userInput);
      this.message = 'Fibonacci numbers calculated successfully!';
    } else {
      this.fibNumbers = [];
      this.message = 'Please enter a valid positive integer.';
    }
  }

  fibList(n: number): number[] {
    let fibs: number[] = [];
    let a = 0, b = 1, temp;

    for (let i = 0; i < n; i++) {
      fibs.push(a);
      temp = a;
      a = b;
      b = temp + b;
    }

    return fibs;
  }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  fibonacciNumbers: number[] = [];
  message: string = '';

  ngOnInit(): void {
    this.calculateFibonacciNumbers();
  }

  calculateFibonacciNumbers(): void {
    let n = 10;
    let first = 0, second = 1, next;

    for (let i = 0; i < n; i++) {
      this.fibonacciNumbers.push(first);
      next = first + second;
      first = second;
      second = next;
    }

    this.message = 'Fibonacci numbers calculated successfully!';
  }
}
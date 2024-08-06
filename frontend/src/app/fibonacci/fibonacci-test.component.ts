package app.fibonacci;

import { Component, OnInit } from '@angular/core';
import { FibonacciService } from '../services/fibonacci.service';

@Component({
  selector: 'app-fibonacci-test',
  template: `
    <h1>Tests for Fibonacci Numbers calculator</h1>
    <p>Here are some inputs to the Fibonacci calculator to try:</p>
    <ul>
      <li *ngFor="let testCase of testCases">
        <a [href]="testCase.link">{{ testCase.text }}</a>
      </li>
    </ul>
  `
})
export class FibonacciTestComponent implements OnInit {
  testCases: { link: string; text: string }[];

  constructor(private fibonacciService: FibonacciService) {}

  ngOnInit(): void {
    this.populateTestCases();
  }

  populateTestCases(): void {
    this.testCases = [
      { link: '/fib/0', text: 'Ask for 0 Fibonacci numbers' },
      { link: '/fib/1', text: 'Only 1 Fibonacci number' },
      { link: '/fib/2', text: 'Only 2 Fibonacci numbers' },
      { link: '/fib/2e3', text: 'Try scientific notation' },
      { link: '/fib/3e7', text: 'Try a really large number' },
      { link: '/fib/-9', text: 'Try a negative number' },
      { link: '/fib/foo', text: 'Try a word' }
    ];
  }
}
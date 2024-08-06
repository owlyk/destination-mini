package src.frontend.src.app.fibonacci;

import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  testInputs: number[] = [0, 1, 2, 1e3, 987654321, -5, 'word'];

  generateFibonacciNumbers(input: number): number[] {
    if (isNaN(input) || !Number.isInteger(input) || input < 0) {
      return [];
    }

    const fibonacciNumbers: number[] = [0, 1];
    for (let i = 2; i < input; i++) {
      fibonacciNumbers[i] = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
    }

    return fibonacciNumbers;
  }

  displayTestScript(): void {
    console.log('Test Script for Fibonacci Numbers Calculator');
    console.log('Instructions:');
    console.log('1. Enter a number to generate Fibonacci numbers.');
    console.log('2. Click on the links to test different inputs.');
  }

  displayFibonacciSeries(): void {
    this.testInputs.forEach(input => {
      console.log(`Fibonacci Series for input ${input}: ${this.generateFibonacciNumbers(input).join(', ')}`);
    });
  }
}
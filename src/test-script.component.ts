package src;

import { Component } from '@angular/core';

@Component({
  selector: 'app-test-script',
  template: `
    <div>
      <h1>Fibonacci Test Results</h1>
      <ul>
        <li *ngFor="let result of testResults">
          {{ result.input }}: {{ result.output }} - {{ result.passed ? 'Passed' : 'Failed' }}
        </li>
      </ul>
    </div>
  `
})
export class TestScriptComponent {
  testCases = [
    { input: 0, expected: 0 },
    { input: 1, expected: 1 },
    { input: 2, expected: 1 },
    { input: 3, expected: 2 },
    { input: 4, expected: 3 },
    { input: 5, expected: 5 },
    { input: 6, expected: 8 },
    { input: 7, expected: 13 },
    { input: 8, expected: 21 },
    { input: 9, expected: 34 },
  ];

  testResults = [];

  constructor() {
    this.runTests();
  }

  runTests() {
    this.testResults = this.testCases.map(testCase => {
      const output = this.fibonacci(testCase.input);
      return {
        input: testCase.input,
        output: output,
        expected: testCase.expected,
        passed: output === testCase.expected
      };
    });
  }

  fibonacci(n: number): number {
    if (n <= 1) return n;
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }
}
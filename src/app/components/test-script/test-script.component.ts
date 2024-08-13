package app.components.test-script;

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FibonacciService } from '../../services/fibonacci.service';

@Component({
  selector: 'app-test-script',
  templateUrl: './test-script.component.html',
  styleUrls: ['./test-script.component.css']
})
export class TestScriptComponent implements OnInit {
  testCases: Array<{ input: string, description: string }> = [
    { input: '0', description: 'Request 0 Fibonacci numbers' },
    { input: '1', description: 'Request 1 Fibonacci number' },
    { input: '2', description: 'Request 2 Fibonacci numbers' },
    { input: '10', description: 'Request 10 Fibonacci numbers' },
    { input: '100', description: 'Request 100 Fibonacci numbers' },
    { input: '1e3', description: 'Request Fibonacci numbers with scientific notation' },
    { input: '1000000', description: 'Request a large number of Fibonacci numbers' },
    { input: '-1', description: 'Request Fibonacci numbers with a negative number' },
    { input: 'abc', description: 'Request Fibonacci numbers with a non-numeric string' }
  ];

  constructor(private router: Router, private fibonacciService: FibonacciService) {}

  ngOnInit(): void {}

  navigateToFibonacci(input: string): void {
    this.router.navigate(['/fibonacci', { input }]);
  }
}
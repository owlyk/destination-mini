package app.components.test_script;

import { Component, OnInit } from '@angular/core';
import { FibonacciService } from '../services/fibonacci.service';

@Component({
  selector: 'app-test-script',
  templateUrl: './test-script.component.html',
  styleUrls: ['./test-script.component.css']
})
export class TestScriptComponent implements OnInit {
  testCases: { description: string; endpoint: string }[];

  constructor(private fibonacciService: FibonacciService) {
    this.testCases = [];
  }

  ngOnInit(): void {
    this.testCases = [
      { description: 'Test case 1', endpoint: '/api/fibonacci/1' },
      { description: 'Test case 2', endpoint: '/api/fibonacci/2' },
      { description: 'Test case 3', endpoint: '/api/fibonacci/3' }
    ];
  }

  callFibonacciApi(endpoint: string): void {
    this.fibonacciService.getFibonacci(endpoint).subscribe(response => {
      console.log(response);
    });
  }
}
package app.components.test-script;

import { Component, OnInit } from '@angular/core';
import { FibonacciService } from '../../services/fibonacci.service';

@Component({
  selector: 'app-test-script',
  templateUrl: './test-script.component.html',
  styleUrls: ['./test-script.component.css']
})
export class TestScriptComponent implements OnInit {
  inputNumber: number;
  result: number;
  errorMessage: string;

  constructor(private fibonacciService: FibonacciService) {}

  ngOnInit(): void {
    this.inputNumber = 0;
    this.result = null;
    this.errorMessage = '';
  }

  calculateFibonacci(): void {
    this.errorMessage = '';
    this.fibonacciService.getFibonacci(this.inputNumber).subscribe(
      (data) => {
        this.result = data;
      },
      (error) => {
        this.errorMessage = 'Error fetching Fibonacci number';
      }
    );
  }
}
package src;

import { Component, OnInit } from '@angular/core';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {
  inputValue: string;
  fibonacciResult: string;

  constructor(private fibonacciService: FibonacciService) {}

  ngOnInit(): void {
    this.inputValue = '';
    this.fibonacciResult = '';
  }

  onCalculate(): void {
    this.fibonacciService.calculateFibonacci(this.inputValue).subscribe(
      result => {
        this.fibonacciResult = result.toString();
      },
      error => {
        this.fibonacciResult = error.message;
      }
    );
  }
}
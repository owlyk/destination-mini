package app.components.fibonacci;

import { Component, OnInit } from '@angular/core';
import { FibonacciService } from '../../services/fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {
  fibonacciResult: number;
  errorMessage: string;

  constructor(private fibonacciService: FibonacciService) {}

  ngOnInit(): void {
    this.fibonacciService.getFibonacciZero().subscribe(
      result => {
        this.fibonacciResult = result;
      },
      error => {
        this.errorMessage = 'Error fetching Fibonacci result';
      }
    );
  }
}
package app;

import { Component, OnInit } from '@angular/core';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {
  fibonacciResult: any;

  constructor(private fibonacciService: FibonacciService) {}

  ngOnInit(): void {
    this.fetchFibonacciZero();
  }

  fetchFibonacciZero(): void {
    this.fibonacciService.getFibonacciZero().subscribe(response => {
      this.fibonacciResult = response;
    });
  }
}
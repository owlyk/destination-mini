package src.frontend.src.app.components.fibonacci;

import { Component, OnInit } from '@angular/core';
import { FibonacciService } from 'path/to/fibonacci.service';

@Component({
  selector: 'app-fibonacci-list',
  templateUrl: './fibonacci-list.component.html',
  styleUrls: ['./fibonacci-list.component.css']
})
export class FibonacciListComponent implements OnInit {
  fibonacciNumbers: number[] = [];

  constructor(private fibonacciService: FibonacciService) { }

  ngOnInit(): void {
    this.getFibonacciNumbers();
  }

  getFibonacciNumbers(): void {
    this.fibonacciService.getFibonacciNumbers().subscribe(numbers => {
      this.fibonacciNumbers = numbers;
    });
  }

  truncateFibonacciNumber(number: number): string {
    const TRUNCATE_AFTER_THIS_MANY = 10;
    if (number.toString().length > TRUNCATE_AFTER_THIS_MANY) {
      return number.toString().substring(0, TRUNCATE_AFTER_THIS_MANY) + '...';
    }
    return number.toString();
  }
}
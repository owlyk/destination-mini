npm install @angular/core

import { Component } from '@angular/core';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  constructor(private fibonacciService: FibonacciService) {}

  displayFibonacciSeries() {
    // Implement logic to interact with FibonacciService and display the series
  }
}
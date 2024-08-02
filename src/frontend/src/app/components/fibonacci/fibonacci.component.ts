import { Component, OnInit } from '@angular/core';
import { FibonacciService } from '../../services/fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {
  userInput: number;
  fibonacciNumbers: number[];
  message: string;

  constructor(private fibonacciService: FibonacciService) { }

  ngOnInit(): void {
    this.userInput = 0;
    this.fibonacciNumbers = [];
    this.message = '';
  }

  calculateFibonacci(): void {
    this.fibonacciNumbers = this.fibonacciService.getFibonacciSequence(this.userInput);
    this.message = `Fibonacci sequence up to ${this.userInput} calculated successfully.`;
  }
}
import { Component, OnInit } from '@angular/core';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {
  userInput: number;
  fibonacciSequence: number[];

  constructor(private fibonacciService: FibonacciService) { }

  ngOnInit(): void {
  }

  generateFibonacciSequence(): void {
    this.fibonacciService.getFibonacciSequence(this.userInput)
      .subscribe(sequence => {
        this.fibonacciSequence = sequence;
      });
  }

  validateInput(): boolean {
    return this.userInput && this.userInput > 0 && Number.isInteger(this.userInput);
  }

  handleError(error: any): void {
    console.error('An error occurred:', error);
  }
}
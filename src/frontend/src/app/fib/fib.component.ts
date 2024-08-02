@angular/core
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fib',
  templateUrl: './fib.component.html',
  styleUrls: ['./fib.component.css']
})
export class FibComponent {
  userInput: number;
  fibonacciNumbers: number[];

  constructor(private http: HttpClient) {
    this.userInput = 0;
    this.fibonacciNumbers = [];
  }

  validateInput(): boolean {
    return this.userInput >= 0;
  }

  generateFibonacci(): void {
    if (this.validateInput()) {
      this.http.get<number[]>(`/api/fib/${this.userInput}`).subscribe(
        (data: number[]) => {
          this.fibonacciNumbers = data;
        },
        (error) => {
          console.error('Error fetching Fibonacci numbers:', error);
        }
      );
    } else {
      console.error('Invalid input for Fibonacci calculation');
    }
  }
}
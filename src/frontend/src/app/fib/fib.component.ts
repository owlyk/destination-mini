import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fib',
  templateUrl: './fib.component.html',
  styleUrls: ['./fib.component.css']
})
export class FibComponent {
  userInput: number;
  fibonacciNumbers: number[] = [];
  truncationValue: number = 10;

  constructor(private http: HttpClient) {}

  validateInput(): boolean {
    return Number.isInteger(this.userInput) && this.userInput > 0;
  }

  generateFibonacciNumbers(): void {
    this.http.get(`/api/fibonacci/${this.userInput}`).subscribe((data: number[]) => {
      this.fibonacciNumbers = data.slice(0, this.truncationValue);
    });
  }
}
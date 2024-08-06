import { Component } from '@angular/core';
import { FibonacciService } from '../../services/fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  fibonacciSeries: number[] = [];

  constructor(private fibonacciService: FibonacciService) {}

  fetchFibonacciSeries(num: number): void {
    this.fibonacciService.getFibonacciSeries(num).subscribe(
      (data: number[]) => {
        this.fibonacciSeries = data;
      },
      (error) => {
        console.error('Error fetching Fibonacci series:', error);
      }
    );
  }
}
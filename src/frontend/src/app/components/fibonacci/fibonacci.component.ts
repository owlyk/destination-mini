package fibonacci;

import { FibonacciService } from '../services/fibonacci.service';

export class FibonacciComponent {
  
  constructor(private fibonacciService: FibonacciService) {}

  displayFibonacciSeries(num: number): void {
    const result = this.fibonacciService.generateFibonacciSeries(num);
    console.log(result);
  }

}
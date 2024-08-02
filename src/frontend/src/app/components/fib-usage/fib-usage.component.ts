import { Component } from '@angular/core';

@Component({
  selector: 'app-fib-usage',
  templateUrl: './fib-usage.component.html',
  styleUrls: ['./fib-usage.component.css']
})
export class FibUsageComponent {
  TRUNCATE_AFTER_THIS_MANY: number = 10;

  calculateFibonacci(input: number): number[] {
    let fibNumbers: number[] = [0, 1];
    for (let i = 2; i < input; i++) {
      fibNumbers[i] = fibNumbers[i - 1] + fibNumbers[i - 2];
    }
    return fibNumbers.slice(0, this.TRUNCATE_AFTER_THIS_MANY);
  }
}
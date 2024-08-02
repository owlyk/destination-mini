```javascript
import { Component, OnInit } from '@angular/core';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {
  userInput: number;
  fibonacciSeries: number[];

  constructor(private fibonacciService: FibonacciService) { }

  ngOnInit(): void {
  }

  calculateFibonacci(): void {
    this.fibonacciService.getFibonacciSeries(this.userInput).subscribe(series => {
      this.fibonacciSeries = series;
    });
  }
}
```
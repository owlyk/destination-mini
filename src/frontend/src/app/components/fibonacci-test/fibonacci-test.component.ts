import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonacci-test',
  templateUrl: './fibonacci-test.component.html',
  styleUrls: ['./fibonacci-test.component.css']
})
export class FibonacciTestComponent {
  
  testInputs = [
    { description: 'Test calculating 0 Fibonacci numbers', endpoint: '/api/fibonacci?n=0' },
    { description: 'Test calculating 1 Fibonacci number', endpoint: '/api/fibonacci?n=1' },
    { description: 'Test calculating 5 Fibonacci numbers', endpoint: '/api/fibonacci?n=5' },
    { description: 'Test calculating 10 Fibonacci numbers', endpoint: '/api/fibonacci?n=10' }
  ];

  constructor() { }

}
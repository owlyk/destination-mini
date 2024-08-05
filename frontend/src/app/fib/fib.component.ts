package app.fib;

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fib',
  templateUrl: './fib.component.html',
  styleUrls: ['./fib.component.css']
})
export class FibComponent implements OnInit {
  title: string = 'Fibonacci Calculator';
  greeting: string = 'Welcome to the Fibonacci Calculator!';

  ngOnInit(): void {
  }

  navigateToFibonacci(): void {
    // Logic to navigate to Fibonacci calculation page
  }
}
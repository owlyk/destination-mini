package src.fib;

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fib',
  templateUrl: './fib.component.html',
  styleUrls: ['./fib.component.css']
})
export class FibComponent implements OnInit {
  title: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.title = 'Fibonacci Calculation';
  }

  navigateToFibonacci(): void {
    // Future navigation logic can be implemented here
  }
}
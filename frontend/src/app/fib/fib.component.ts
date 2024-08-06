package app.fib;

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fib',
  templateUrl: './fib.component.html',
  styleUrls: ['./fib.component.css']
})
export class FibComponent implements OnInit {
  title: string;

  constructor(private router: Router) {
    this.title = 'Fibonacci Calculation';
  }

  ngOnInit(): void {
    this.title += ' - Fibonacci';
  }

  navigateToFibonacci(): void {
    this.router.navigate(['/fibonacci']);
  }
}
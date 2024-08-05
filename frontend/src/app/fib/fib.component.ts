package app.fib;

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fib',
  template: `
    <h1>Start Page</h1>
    <p>
      Welcome! Click here to calculate <a [routerLink]="['/fib']">Fibonacci numbers</a>.
    </p>
  `
})
export class FibComponent implements OnInit {
  public title: string = 'Home';

  constructor() {}

  ngOnInit(): void {}
}
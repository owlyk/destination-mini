package app.fibFoo;

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fib-foo',
  template: `
    <input [(ngModel)]="inputValue" (ngModelChange)="validateInput()" />
    <div *ngIf="errorMessage">{{ errorMessage }}</div>
  `
})
export class FibFooComponent implements OnInit {
  inputValue: string = '';
  errorMessage: string = '';

  ngOnInit(): void {
    this.inputValue = '';
    this.errorMessage = '';
  }

  validateInput(): void {
    if (isNaN(Number(this.inputValue))) {
      this.errorMessage = 'Invalid input. Please enter a numeric value.';
      console.log('Invalid input:', this.inputValue);
    } else {
      this.errorMessage = '';
      // API call can be made here
    }
  }
}
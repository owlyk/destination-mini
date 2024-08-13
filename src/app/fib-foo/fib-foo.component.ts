package src.app.fib-foo;

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-fib-foo',
  templateUrl: './fib-foo.component.html',
  styleUrls: ['./fib-foo.component.css']
})
export class FibFooComponent implements OnInit {
  inputValue: string;
  errorMessage: string;

  constructor(private apiService: ApiService) {
    this.inputValue = '';
    this.errorMessage = '';
  }

  ngOnInit(): void {
  }

  validateInput(): void {
    const numericPattern = /^-?\d+(\.\d+)?([eE][-+]?\d+)?$/;
    if (!numericPattern.test(this.inputValue)) {
      this.errorMessage = 'Invalid input. Please enter a numeric value.';
      console.log('Invalid input:', this.inputValue);
    } else {
      this.errorMessage = '';
      this.apiService.validateInput(this.inputValue);
    }
  }
}
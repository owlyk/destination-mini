import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  fibonacciForm: FormGroup;
  fibonacciNumbers: number[] = [];
  message: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.fibonacciForm = this.formBuilder.group({
      number: ['', [Validators.required, Validators.min(1)]]
    });
  }

  calculateFibonacci() {
    if (this.fibonacciForm.valid) {
      const num = this.fibonacciForm.value.number;
      this.fibonacciNumbers = this.generateFibonacci(num);
      this.message = `Generated Fibonacci sequence for ${num} numbers`;
    } else {
      this.message = 'Please enter a valid number to generate Fibonacci sequence';
    }
  }

  generateFibonacci(num: number): number[] {
    const result = [0, 1];
    for (let i = 2; i < num; i++) {
      result[i] = result[i - 1] + result[i - 2];
    }
    return result.slice(0, num);
  }
}
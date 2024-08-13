package fibonacci;

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-fibonacci',
  template: `
    <form [formGroup]="fibonacciForm" (ngSubmit)="getFibonacci()">
      <input formControlName="number" type="number" placeholder="Enter a number" required />
      <button type="submit">Get Fibonacci</button>
    </form>
    <div *ngIf="fibonacciSequence">
      <h3>Fibonacci Sequence:</h3>
      <p>{{ fibonacciSequence }}</p>
    </div>
    <div *ngIf="errorMessage">
      <h3>Error:</h3>
      <p>{{ errorMessage }}</p>
    </div>
  `,
  styles: [`
    form {
      display: flex;
      flex-direction: column;
      max-width: 300px;
      margin: auto;
    }
    input {
      margin-bottom: 10px;
    }
  `]
})
export class FibonacciComponent {
  fibonacciForm: FormGroup;
  fibonacciSequence: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.fibonacciForm = this.fb.group({
      number: ['', [Validators.required, Validators.min(0)]]
    });
  }

  getFibonacci() {
    const input = this.fibonacciForm.value.number;
    this.http.get<string>(`/fib/${input}`).pipe(
      catchError(error => {
        this.errorMessage = 'Invalid input or server error';
        this.fibonacciSequence = null;
        return of(null);
      })
    ).subscribe(response => {
      if (response) {
        this.fibonacciSequence = response;
        this.errorMessage = null;
      }
    });
  }
}
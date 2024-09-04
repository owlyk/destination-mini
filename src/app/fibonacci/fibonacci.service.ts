package src.app.fibonacci;

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  private apiUrl = '/api/myFib';

  constructor(private http: HttpClient) {}

  getFibonacciSeries(number: number): Observable<any> {
    return this.http.post<any>(this.apiUrl, { number })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}

import { Component } from '@angular/core';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  template: `
    <div>
      <h1>Fibonacci Series Generator</h1>
      <input type="number" [(ngModel)]="inputNumber" placeholder="Enter a positive integer" min="1" />
      <button (click)="generateFibonacci()" [disabled]="!isValidInput()">Generate</button>
      <div *ngIf="fibonacciSeries">
        <h2>Fibonacci Series:</h2>
        <p>{{ fibonacciSeries }}</p>
      </div>
      <div *ngIf="errorMessage" style="color: red;">
        <p>{{ errorMessage }}</p>
      </div>
    </div>
  `
})
export class FibonacciComponent {
  inputNumber: number;
  fibonacciSeries: string = '';
  errorMessage: string = '';

  constructor(private fibonacciService: FibonacciService) {}

  generateFibonacci() {
    this.fibonacciService.getFibonacciSeries(this.inputNumber).subscribe(
      (data) => {
        this.fibonacciSeries = data.series.join(', ');
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = error;
        this.fibonacciSeries = '';
      }
    );
  }

  isValidInput(): boolean {
    return this.inputNumber > 0;
  }
}
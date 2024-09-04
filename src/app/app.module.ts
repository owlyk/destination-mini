package app;

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { FibonacciService } from './fibonacci/fibonacci.service';

@NgModule({
  declarations: [
    AppComponent,
    FibonacciComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FibonacciService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  template: `
    <form [formGroup]="fibonacciForm" (ngSubmit)="getFibonacci()">
      <label for="number">Enter a number:</label>
      <input id="number" formControlName="number" type="number" required>
      <button type="submit">Get Fibonacci Series</button>
    </form>
    <div *ngIf="fibonacciSeries">
      <h3>Fibonacci Series:</h3>
      <p>{{ fibonacciSeries }}</p>
    </div>
  `
})
export class FibonacciComponent {
  fibonacciForm: FormGroup;
  fibonacciSeries: string;

  constructor(private fb: FormBuilder, private fibonacciService: FibonacciService) {
    this.fibonacciForm = this.fb.group({
      number: ['']
    });
  }

  getFibonacci() {
    const number = this.fibonacciForm.value.number;
    this.fibonacciService.getFibonacciSeries(number).subscribe(series => {
      this.fibonacciSeries = series.join(', ');
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  constructor(private http: HttpClient) { }

  getFibonacciSeries(n: number): Observable<number[]> {
    return this.http.get<number[]>(`/api/fibonacci/${n}`);
  }
}
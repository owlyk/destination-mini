package main;

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

if (environment.production) {
  enableProdMode();
}

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  constructor(private http: HttpClient) {}

  calculateFibonacci(input: string) {
    return this.http.post('/fib', { input });
  }
}

@Component({
  selector: 'app-fibonacci',
  template: `
    <form (ngSubmit)="onSubmit()">
      <input [(ngModel)]="input" name="input" required />
      <button type="submit">Calculate</button>
    </form>
    <div *ngIf="result">{{ result }}</div>
  `
})
export class FibonacciComponent {
  input: string;
  result: string;

  constructor(private fibonacciService: FibonacciService) {}

  onSubmit() {
    this.fibonacciService.calculateFibonacci(this.input).subscribe(
      response => this.result = response,
      error => this.result = error.error.message
    );
  }
}

const routes: Routes = [
  { path: 'fibonacci', component: FibonacciComponent }
];

@NgModule({
  declarations: [FibonacciComponent],
  imports: [HttpClientModule, FormsModule, RouterModule.forRoot(routes)],
  bootstrap: [FibonacciComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
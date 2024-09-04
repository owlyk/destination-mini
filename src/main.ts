package main;

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Fibonacci Number Finder</h1>
      <input [(ngModel)]="number" placeholder="Enter a number" />
      <button (click)="getFibonacci()">Get Fibonacci</button>
      <p *ngIf="fibonacci !== null">Fibonacci: {{ fibonacci }}</p>
    </div>
  `
})
export class AppComponent {
  number: number;
  fibonacci: number | null = null;

  constructor(private http: HttpClient) {}

  getFibonacci() {
    this.http.get<number>(`/api/fibonacci/${this.number}`).subscribe(result => {
      this.fibonacci = result;
    });
  }
}
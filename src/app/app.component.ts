package app;

import { Component } from '@angular/core';
import { FibonacciComponent } from './fibonacci/fibonacci.component';

@Component({
  selector: 'app-root',
  template: '<app-fibonacci></app-fibonacci>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
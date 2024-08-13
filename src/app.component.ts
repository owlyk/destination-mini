package src;

import { Component } from '@angular/core';
import { FibonacciComponent } from './fibonacci/fibonacci.component';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Fibonacci Calculator</h1>
      <fibonacci-component></fibonacci-component>
    </div>
  `,
  styles: []
})
export class AppComponent {}
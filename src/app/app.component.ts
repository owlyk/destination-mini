package app;

import { Component } from '@angular/core';
import { FibonacciComponent } from './fibonacci/fibonacci.component';

@Component({
  selector: 'app-root',
  template: '<fibonacci></fibonacci>',
})
export class AppComponent {}
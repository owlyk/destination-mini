import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FibonacciComponent } from './fibonacci.component';
import { FibonacciService } from './fibonacci.service';

@NgModule({
  declarations: [
    FibonacciComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'homepage', component: FibonacciComponent },
      { path: 'index', component: FibonacciComponent },
      { path: 'test-script', component: FibonacciComponent },
      { path: 'usage', component: FibonacciComponent },
      { path: 'fibonacci-calculation', component: FibonacciComponent }
    ])
  ],
  providers: [
    FibonacciService
  ]
})
export class FibonacciModule { }
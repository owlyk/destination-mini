import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FibonacciComponent } from '../components/fibonacci/fibonacci.component';
import { FibonacciService } from '../services/fibonacci.service';

@NgModule({
  declarations: [
    FibonacciComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'home', component: HomeComponent },
      { path: 'test-script', component: TestScriptComponent },
      { path: 'fibonacci-usage', component: FibonacciComponent },
      { path: 'fibonacci-calculation', component: FibonacciComponent }
    ])
  ],
  providers: [
    FibonacciService
  ]
})
export class FibonacciModule { }
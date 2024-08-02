import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FibonacciComponent } from '../components/fibonacci.component';
import { FibonacciService } from '../services/fibonacci.service';

@NgModule({
  declarations: [
    FibonacciComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    FibonacciService
  ]
})
export class FibonacciModule {}
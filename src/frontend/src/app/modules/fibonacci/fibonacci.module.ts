import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FibonacciComponent } from './fibonacci.component';
import { FibonacciService } from './fibonacci.service';

@NgModule({
  declarations: [
    FibonacciComponent
  ],
  imports: [
    HttpClientModule
  ],
  providers: [
    FibonacciService
  ]
})
export class FibonacciModule { }
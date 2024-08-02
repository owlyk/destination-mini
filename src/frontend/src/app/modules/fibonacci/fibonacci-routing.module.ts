import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibonacciComponent } from './fibonacci.component';

const routes: Routes = [
  { path: '', component: FibonacciComponent },
  { path: 'index', component: FibonacciComponent },
  { path: 'test', component: FibonacciComponent },
  { path: 'usage', component: FibonacciComponent },
  { path: 'fib/:argument', component: FibonacciComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FibonacciRoutingModule { }
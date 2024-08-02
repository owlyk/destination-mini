import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibonacciComponent } from '../components/fibonacci/fibonacci.component';

const routes: Routes = [
  { path: 'fib/:argument', component: FibonacciComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FibonacciRoutingModule { }
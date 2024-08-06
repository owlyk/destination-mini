package fibonacci-routing.module.ts;

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibonacciComponent } from '../components/fibonacci.component';

const routes: Routes = [
  { path: 'fib/2', component: FibonacciComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FibonacciRoutingModule {}
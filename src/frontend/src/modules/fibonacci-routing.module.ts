npm install @angular/router

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibonacciComponent } from '../components/fibonacci.component';

const routes: Routes = [
  { path: 'fib/foo', component: FibonacciComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FibonacciRoutingModule {}
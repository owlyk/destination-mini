package fibonacci-routing.module;

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FibonacciComponent } from '../components/fibonacci/fibonacci.component';

const routes: Routes = [
  { path: 'home', component: FibonacciComponent },
  { path: 'test-script', component: FibonacciComponent },
  { path: 'fibonacci-usage', component: FibonacciComponent },
  { path: 'fibonacci-calculation', component: FibonacciComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FibonacciRoutingModule { }
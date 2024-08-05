package fibonacci-test-routing.module;

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibonacciTestComponent } from '../components/fibonacci-test/fibonacci-test.component';

const routes: Routes = [
  { path: 'fib/-9', component: FibonacciTestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FibonacciTestRoutingModule {}
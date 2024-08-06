package fibonacci-routing.module;

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FibonacciComponent } from '../components/fibonacci.component';

const routes: Routes = [
  { path: 'fibonacci', component: FibonacciComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FibonacciRoutingModule {}
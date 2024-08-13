package app-routing.module;

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibonacciComponent } from './fibonacci/fibonacci.component';

const routes: Routes = [
  { path: 'fib', component: FibonacciComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
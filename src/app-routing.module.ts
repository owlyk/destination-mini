package appRoutingModule;

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibonacciComponent } from './fibonacci/fibonacci.component';

const routes: Routes = [
  { path: 'myFib/:argument', component: FibonacciComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
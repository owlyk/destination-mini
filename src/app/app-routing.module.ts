package app;

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibUsageComponent } from './fib-usage/fib-usage.component';

const routes: Routes = [
  { path: 'fib-usage', component: FibUsageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
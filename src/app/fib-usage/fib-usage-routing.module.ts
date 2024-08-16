package app.fibUsage;

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibUsageComponent } from './fib-usage.component';

const routes: Routes = [
  { path: 'fib_usage', component: FibUsageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FibUsageRoutingModule { }
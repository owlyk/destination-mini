import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FibonacciComponent } from './fibonacci.component';

const routes: Routes = [
  { path: 'fibonacci', component: FibonacciComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FibonacciRoutingModule { }
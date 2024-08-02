import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibComponent } from './fib.component';

const routes: Routes = [
  { path: '', component: FibComponent },
  { path: 'index', component: FibComponent },
  { path: 'test_script', component: FibComponent },
  { path: 'fib_usage', component: FibComponent },
  { path: 'myFib', component: FibComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FibRoutingModule { }
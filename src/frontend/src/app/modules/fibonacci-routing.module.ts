import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FibonacciCalculationComponent } from '../components/fibonacci-calculation/fibonacci-calculation.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'index', component: IndexComponent },
  { path: 'test', component: TestComponent },
  { path: 'usage', component: UsageComponent },
  { path: 'fib/:argument', component: FibonacciCalculationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FibonacciRoutingModule { }
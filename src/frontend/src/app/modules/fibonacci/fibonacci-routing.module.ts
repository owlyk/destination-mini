import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibonacciComponent } from './fibonacci.component';

const routes: Routes = [
  { path: 'fibonacci', component: FibonacciComponent },
  { path: 'home', component: HomeComponent },
  { path: 'test', component: TestComponent },
  { path: 'usage', component: UsageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FibonacciRoutingModule {}
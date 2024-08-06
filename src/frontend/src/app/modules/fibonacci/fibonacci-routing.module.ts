import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibonacciComponent } from './fibonacci.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'test-script', component: TestScriptComponent },
  { path: 'fibonacci-usage', component: FibonacciUsageComponent },
  { path: 'fibonacci-calculation', component: FibonacciCalculationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FibonacciRoutingModule {}
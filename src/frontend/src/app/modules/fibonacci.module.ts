import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FibonacciComponent } from '../components/fibonacci/fibonacci.component';

@NgModule({
  declarations: [
    FibonacciComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'home', component: HomeComponent },
      { path: 'test-script', component: TestScriptComponent },
      { path: 'fibonacci-usage', component: FibonacciUsageComponent },
      { path: 'fibonacci-calculation', component: FibonacciCalculationComponent }
    ])
  ],
  exports: [
    FibonacciComponent
  ]
})
export class FibonacciModule { }
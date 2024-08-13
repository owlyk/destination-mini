package appRoutingModule;

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { UsageComponent } from './usage/usage.component';
import { TestScriptComponent } from './test-script/test-script.component';

const routes: Routes = [
  { path: '', component: FibonacciComponent },
  { path: 'usage', component: UsageComponent },
  { path: 'test_script', component: TestScriptComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
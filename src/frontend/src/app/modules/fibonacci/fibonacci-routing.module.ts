import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { TestScriptComponent } from './test-script/test-script.component';
import { FibUsageComponent } from './fib-usage/fib-usage.component';
import { MyFibComponent } from './my-fib/my-fib.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'index', component: IndexComponent },
  { path: 'test_script', component: TestScriptComponent },
  { path: 'fib_usage', component: FibUsageComponent },
  { path: 'myFib', component: MyFibComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FibonacciRoutingModule { }
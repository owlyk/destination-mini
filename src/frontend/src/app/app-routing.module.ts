import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { IndexComponent } from './index/index.component';
import { TestScriptComponent } from './test_script/test_script.component';
import { FibUsageComponent } from './fib_usage/fib_usage.component';
import { MyFibComponent } from './myFib/myFib.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'index', component: IndexComponent },
  { path: 'test_script', component: TestScriptComponent },
  { path: 'fib_usage', component: FibUsageComponent },
  { path: 'myFib', component: MyFibComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
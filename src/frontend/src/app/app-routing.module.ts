import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { IndexComponent } from './components/index/index.component';
import { TestScriptComponent } from './components/test-script/test-script.component';
import { FibUsageComponent } from './components/fib-usage/fib-usage.component';
import { MyFibComponent } from './components/my-fib/my-fib.component';

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
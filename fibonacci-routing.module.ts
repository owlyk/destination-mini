```typescript
package fibonacci-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { IndexComponent } from './index.component';
import { TestScriptComponent } from './test-script.component';
import { FibUsageComponent } from './fib-usage.component';
import { MyFibComponent } from './my-fib.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
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
```
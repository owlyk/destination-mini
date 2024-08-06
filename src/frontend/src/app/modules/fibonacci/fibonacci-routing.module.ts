```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestScriptComponent } from './test-script/test-script.component';
import { FibonacciUsageComponent } from './fibonacci-usage/fibonacci-usage.component';
import { FibonacciCalculationComponent } from './fibonacci-calculation/fibonacci-calculation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test-script', component: TestScriptComponent },
  { path: 'fibonacci-usage', component: FibonacciUsageComponent },
  { path: 'fibonacci-calculation', component: FibonacciCalculationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FibonacciRoutingModule { }
```
```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FibonacciComponent } from './fibonacci.component';

const routes: Routes = [
  { path: '', component: FibonacciComponent },
  { path: 'index', component: FibonacciComponent },
  { path: 'test_script', component: FibonacciComponent },
  { path: 'fib_usage', component: FibonacciComponent },
  { path: 'myFib', component: FibonacciComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FibonacciRoutingModule { }
```
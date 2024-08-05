```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibFooComponent } from './fib-foo.component';

const routes: Routes = [
  { path: 'fib/foo', component: FibFooComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FibFooRoutingModule { }
```
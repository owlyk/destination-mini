```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibonacciComponent } from '../components/fibonacci/fibonacci.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'test-script', component: TestScriptComponent },
  { path: 'fibonacci', component: FibonacciComponent },
  { path: 'fibonacci-calculation', component: FibonacciCalculationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FibonacciRoutingModule { }
```
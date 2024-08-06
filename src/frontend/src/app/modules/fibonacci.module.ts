```typescript
import { NgModule } from '@angular/core';
import { FibonacciComponent } from './fibonacci.component';
import { FibonacciService } from './fibonacci.service';

@NgModule({
  declarations: [
    FibonacciComponent
  ],
  providers: [
    FibonacciService
  ]
})
export class FibonacciModule { }
```
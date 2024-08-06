```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FibonacciComponent } from './fibonacci.component';
import { FibonacciService } from './fibonacci.service';

@NgModule({
  declarations: [
    FibonacciComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    FibonacciService
  ],
  exports: [
    FibonacciComponent
  ]
})
export class FibonacciModule { }
```
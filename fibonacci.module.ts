```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FibonacciComponent } from './fibonacci.component';
import { FibonacciService } from './fibonacci.service';

@NgModule({
  declarations: [
    FibonacciComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    FibonacciService
  ]
})
export class FibonacciModule { }
```
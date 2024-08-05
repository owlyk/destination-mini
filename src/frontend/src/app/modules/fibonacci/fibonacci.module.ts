```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FibonacciComponent } from './fibonacci.component';

@NgModule({
  declarations: [
    FibonacciComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    // Add any required services or dependencies here
  ]
})
export class FibonacciModule { }
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FibFooComponent } from './fib-foo.component';

@NgModule({
  declarations: [
    FibFooComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'fib/foo', component: FibFooComponent }
    ])
  ]
})
export class FibFooModule {}
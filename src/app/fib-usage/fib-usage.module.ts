package src.app.fib-usage;

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FibUsageRoutingModule } from './fib-usage-routing.module';
import { FibUsageComponent } from './fib-usage.component';

@NgModule({
  declarations: [FibUsageComponent],
  imports: [
    CommonModule,
    FibUsageRoutingModule
  ],
  exports: [FibUsageComponent]
})
export class FibUsageModule { }
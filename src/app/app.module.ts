package src.app;

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FibFooComponent } from './fib-foo/fib-foo.component';
import { FibFooService } from './fib-foo/fib-foo.service';

@NgModule({
  declarations: [
    AppComponent,
    FibFooComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FibFooService],
  bootstrap: [AppComponent]
})
export class AppModule { }
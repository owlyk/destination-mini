package src.app;

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { UsageComponent } from './usage/usage.component';
import { OutputComponent } from './output/output.component';
import { TestScriptComponent } from './test-script/test-script.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FibonacciComponent,
    UsageComponent,
    OutputComponent,
    TestScriptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
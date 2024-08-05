package app;

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule { }
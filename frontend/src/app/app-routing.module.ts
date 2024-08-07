package app-routing.module;

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestScriptComponent } from './test-script/test-script.component';

const routes: Routes = [
  { path: 'test-script', component: TestScriptComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
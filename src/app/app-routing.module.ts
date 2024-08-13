package app-routing.module;

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibFooComponent } from './fib-foo/fib-foo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'fib/foo', component: FibFooComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
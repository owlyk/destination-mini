@angular/router

const routes: Routes = [
  { path: 'fib', component: FibComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FibRoutingModule { }
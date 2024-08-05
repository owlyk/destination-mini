@angular/router

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fibonacci', component: FibonacciComponent },
  // Add routes for other relevant views here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FibonacciRoutingModule {}
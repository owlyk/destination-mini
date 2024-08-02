@angular/router

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'index', component: IndexComponent },
  { path: 'test_script', component: TestScriptComponent },
  { path: 'fib_usage', component: FibUsageComponent },
  { path: 'myFib', component: MyFibComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
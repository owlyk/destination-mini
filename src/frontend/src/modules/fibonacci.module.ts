@angular/core
@angular/common
@angular/router

@NgModule({
  declarations: [
    FibonacciComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'fibonacci', component: FibonacciComponent }
    ])
  ],
  providers: [
    FibonacciService
  ]
})
export class FibonacciModule {}
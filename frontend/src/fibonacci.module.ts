@angular/core
@angular/common
@angular/forms

@NgModule({
  declarations: [
    FibonacciComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FibonacciComponent
  ]
})
export class FibonacciModule {}
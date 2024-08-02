import { Component } from '@angular/core';

@Component({
  selector: 'app-my-fib',
  templateUrl: './my-fib.component.html',
  styleUrls: ['./my-fib.component.css']
})
export class MyFibComponent {
  
  myFib(arg: any) {
    if (Number.isInteger(arg)) {
      const fibNumbers = this.fibList(arg);
      // Render output.html template with fibNumbers and message
    } else {
      // Handle error for non-integer argument
    }
  }

  fibList(n: number): number[] {
    // Implement logic to calculate Fibonacci numbers
    return [];
  }
}
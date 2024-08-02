@Component({
  selector: 'app-my-fib',
  templateUrl: './my-fib.component.html',
  styleUrls: ['./my-fib.component.css']
})
export class MyFibComponent {
  
  fibList(n: number): number[] {
    let fibNumbers: number[] = [];
    let a = 0, b = 1, temp;
    
    for (let i = 0; i < n; i++) {
      fibNumbers.push(a);
      temp = a;
      a = b;
      b = temp + b;
    }
    
    return fibNumbers;
  }

  myFib(arg: any): void {
    if (Number.isInteger(arg)) {
      const n = parseInt(arg);
      const fibNumbers = this.fibList(n);
      // Render output.html template with fibNumbers and message
    } else {
      // Handle invalid input
    }
  }
}
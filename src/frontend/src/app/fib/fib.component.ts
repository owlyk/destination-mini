@angular/core

@Component({
  selector: 'app-fib',
  templateUrl: './fib.component.html',
  styleUrls: ['./fib.component.css']
})
export class FibComponent implements OnInit {
  userInput: number;
  fibonacciNumbers: number[] = [];
  message: string;
  TRUNCATE_AFTER_THIS_MANY: number = 10;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  validateInput(): boolean {
    // Validation logic here
  }

  generateFibonacci(): void {
    // Fibonacci generation logic here
  }

  truncateFibonacci(): void {
    // Truncation logic here
  }

  getFibonacci(): void {
    // API call logic here
  }
}
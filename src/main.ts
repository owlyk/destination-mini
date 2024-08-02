@angular/core

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class FibonacciComponent {
  userInput: number;
  fibonacciSeries: number[] = [];
  errorMessage: string;

  generateFibonacci() {
    if (this.userInput <= 0) {
      this.errorMessage = 'Please enter a positive number';
      return;
    }

    this.fibonacciSeries = [0, 1];
    for (let i = 2; i < this.userInput; i++) {
      this.fibonacciSeries[i] = this.fibonacciSeries[i - 1] + this.fibonacciSeries[i - 2];
    }
  }
}
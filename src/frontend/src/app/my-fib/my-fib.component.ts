@angular/core

export class MyFibComponent {
  userInput: number;
  fibNumbers: number[];

  calculateFibonacci() {
    if (this.userInput < 0) {
      this.fibNumbers = [];
    } else if (this.userInput === 0) {
      this.fibNumbers = [0];
    } else if (this.userInput === 1) {
      this.fibNumbers = [0, 1];
    } else {
      this.fibNumbers = [0, 1];
      for (let i = 2; i <= this.userInput; i++) {
        this.fibNumbers[i] = this.fibNumbers[i - 1] + this.fibNumbers[i - 2];
      }
    }
  }
}
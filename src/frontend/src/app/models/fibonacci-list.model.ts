package src.frontend.src.app.models;

export class FibonacciList {
  numbers: number[];
  message: string;

  constructor(numbers: number[], message: string) {
    this.numbers = numbers;
    this.message = message;
  }
}
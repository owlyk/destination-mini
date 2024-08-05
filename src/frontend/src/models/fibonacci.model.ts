package frontend.models;

export class FibonacciModel {
  generatedNumbers: number[];
  message: string;

  constructor(generatedNumbers: number[], message: string) {
    this.generatedNumbers = generatedNumbers;
    this.message = message;
  }
}
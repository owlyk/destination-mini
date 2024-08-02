package app.services;

export class FibonacciService {
  private static readonly TRUNCATE_AFTER_THIS_MANY: number = 50;

  public fibList(limit: number): { numbers: number[], message: string } {
    if (limit < 0) {
      return { numbers: [], message: "Limit cannot be negative" };
    }

    let fibNumbers: number[] = [0, 1];
    let i: number = 2;

    while (i < FibonacciService.TRUNCATE_AFTER_THIS_MANY && fibNumbers[i - 1] + fibNumbers[i - 2] <= limit) {
      fibNumbers[i] = fibNumbers[i - 1] + fibNumbers[i - 2];
      i++;
    }

    return { numbers: fibNumbers, message: "Fibonacci numbers generated successfully" };
  }
}
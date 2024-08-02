package app.services;

const MAX_LIMIT = 1476;

export class FibonacciService {
  fibList(num: number): { numbers: number[], message: string } {
    if (num < 0) {
      return { numbers: [], message: "Negative input. Please provide a positive number." };
    }

    if (num > MAX_LIMIT) {
      return { numbers: [], message: `Limit exceeded. Please provide a number less than or equal to ${MAX_LIMIT}.` };
    }

    let fibNumbers: number[] = [0, 1];
    let i = 2;
    while (true) {
      let nextFib = fibNumbers[i - 1] + fibNumbers[i - 2];
      if (nextFib > num) {
        break;
      }
      fibNumbers.push(nextFib);
      i++;
    }

    return { numbers: fibNumbers, message: "Fibonacci numbers generated successfully." };
  }
}
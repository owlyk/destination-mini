import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FibService {

  constructor() { }

  fibList(num: number): { message: string, numbers: number[] } {
    let fibNumbers: number[] = [];
    let a = 0, b = 1, temp;

    for (let i = 0; i < num; i++) {
      fibNumbers.push(a);
      temp = a;
      a = b;
      b = temp + b;
    }

    return { message: `Generated Fibonacci numbers up to ${num}`, numbers: fibNumbers };
  }
}
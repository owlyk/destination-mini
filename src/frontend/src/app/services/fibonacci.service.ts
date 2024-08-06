package app.services;

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  generateFibonacciSeries(terms: number): number[] {
    let fibonacciSeries: number[] = [];

    if (terms === 0) {
      return fibonacciSeries;
    }

    fibonacciSeries.push(0);

    if (terms === 1) {
      return fibonacciSeries;
    }

    fibonacciSeries.push(1);

    for (let i = 2; i < terms; i++) {
      fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    }

    return fibonacciSeries;
  }
}
package src.frontend.src.app.services;

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class FibonacciService {

  constructor(private dialog: MatDialog) { }

  generateFibonacciNumbers(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { terms: 0 }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.terms > 0) {
        const fibonacciSeries = this.calculateFibonacciSeries(result.terms);
        // Display fibonacciSeries in UI using data binding
      } else {
        // Handle invalid input error
      }
    });
  }

  private calculateFibonacciSeries(terms: number): number[] {
    const fibonacciSeries = [0, 1];
    for (let i = 2; i < terms; i++) {
      fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    }
    return fibonacciSeries;
  }
}
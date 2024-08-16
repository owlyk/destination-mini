package app.fib_usage;

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-fib-usage',
  templateUrl: './fib-usage.component.html',
  styleUrls: ['./fib-usage.component.css']
})
export class FibUsageComponent implements OnInit {
  usageInstructions: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<string>('/api/fib_usage').pipe(
      catchError(error => {
        this.usageInstructions = 'Failed to load usage instructions. Please try again later.';
        return of('');
      })
    ).subscribe(instructions => {
      this.usageInstructions = instructions;
    });
  }
}
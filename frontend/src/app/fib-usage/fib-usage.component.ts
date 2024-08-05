package src.app.fib-usage;

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
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchUsageInstructions();
  }

  fetchUsageInstructions(): void {
    this.http.get<string>('fib_usage').pipe(
      catchError(error => {
        this.errorMessage = 'Error fetching usage instructions.';
        return of('');
      })
    ).subscribe(data => {
      this.usageInstructions = data;
    });
  }
}
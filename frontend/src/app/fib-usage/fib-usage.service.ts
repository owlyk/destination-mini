package app.fib-usage;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FibUsageService {
  private apiUrl = 'https://api.example.com/fib-usage';

  constructor(private http: HttpClient) {}

  getUsageInstructions(): Observable<string> {
    return this.http.get<string>(this.apiUrl);
  }
}
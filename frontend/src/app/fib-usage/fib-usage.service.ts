package app.fib-usage;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FibUsageService {
  private apiUrl = '/api/fib_usage';

  constructor(private http: HttpClient) {}

  getUsageInstructions(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
package src.app.fib-usage;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FibUsageService {
  private apiUrl = '/api/fib-usage';

  constructor(private http: HttpClient) {}

  getInstructions(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
package app.usage;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsageService {
  private apiUrl = '/api/usage';

  constructor(private http: HttpClient) {}

  getUsageInstructions(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
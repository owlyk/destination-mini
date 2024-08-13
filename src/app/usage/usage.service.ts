package app.usage;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsageService {
  private apiUrl = '/api/usage/message';

  constructor(private http: HttpClient) {}

  getDynamicMessage(): Observable<string> {
    return this.http.get<string>(this.apiUrl);
  }
}
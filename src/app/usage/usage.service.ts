package app.usage;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsageService {
  constructor(private http: HttpClient) {}

  getDynamicMessage(): Observable<any> {
    return this.http.get('/api/usage/message');
  }
}
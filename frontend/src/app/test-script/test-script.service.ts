package test_script;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestScriptService {
  private baseUrl = '/api/test';

  constructor(private http: HttpClient) {}

  fetchTestResults(): Observable<any> {
    return this.http.get(`${this.baseUrl}/results`);
  }

  initiateTest(): Observable<any> {
    return this.http.post(`${this.baseUrl}/initiate`, {});
  }
}
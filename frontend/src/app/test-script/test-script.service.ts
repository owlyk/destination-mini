package app.test-script;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestScriptService {
  constructor(private http: HttpClient) {}

  getTestScript(): Observable<any> {
    return this.http.get('/test_script');
  }
}
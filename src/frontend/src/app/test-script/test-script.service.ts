package test-script;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestScriptService {

  private baseUrl = 'http://api.example.com';

  constructor(private http: HttpClient) { }

  fetchTestInputs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/test-inputs`);
  }

  handleApiResponses(response: any): any {
    // Process API responses here
    return response;
  }

  handleError(error: any): any {
    // Handle errors here
    return error;
  }
}
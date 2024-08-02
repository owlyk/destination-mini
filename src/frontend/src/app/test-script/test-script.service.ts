package test-script;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestScriptService {

  constructor(private http: HttpClient) { }

  fetchTestInputs(): Observable<number[]> {
    return this.http.get<number[]>('http://example.com/test-inputs');
  }

  processAndFormatInputs(inputs: number[]): number[] {
    // Process and format inputs here
    return inputs.map(input => input * 2);
  }

  handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return new Observable<never>();
  }
}
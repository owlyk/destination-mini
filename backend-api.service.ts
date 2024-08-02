package com.example.backend;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private http: HttpClient) { }

  validateInput(input: number): Promise<boolean> {
    return this.http.post<boolean>('/api/validate', { input }).toPromise();
  }

  generateFibonacciNumber(n: number): Promise<number> {
    return this.http.post<number>('/api/fibonacci', { n }).toPromise();
  }
}
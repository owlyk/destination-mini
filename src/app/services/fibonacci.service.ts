package app.services;

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  private apiUrl = '/api/fibonacci';
  private maxLimit = 10000;

  constructor(private http: HttpClient) {}

  calculateFibonacci(input: number): Observable<any> {
    if (input > this.maxLimit) {
      return throwError('Input exceeds maximum limit of 10,000');
    }
    return this.http.post<any>(this.apiUrl, { input })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError('An error occurred: ' + (error.error.message || error.statusText));
  }
}

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('FibonacciService', () => {
  let service: FibonacciService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FibonacciService]
    });
    service = TestBed.inject(FibonacciService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return Fibonacci numbers for valid input', () => {
    const input = 10;
    const mockResponse = { fibonacci: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] };

    service.calculateFibonacci(input).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('/api/fibonacci');
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });

  it('should return an error message for input exceeding limit', () => {
    const input = 10001;

    service.calculateFibonacci(input).subscribe(
      () => fail('expected an error, not Fibonacci numbers'),
      error => expect(error).toEqual('Input exceeds maximum limit of 10,000')
    );
  });

  it('should handle HTTP errors gracefully', () => {
    const input = 10;

    service.calculateFibonacci(input).subscribe(
      () => fail('expected an error, not Fibonacci numbers'),
      error => expect(error).toContain('An error occurred:')
    );

    const req = httpMock.expectOne('/api/fibonacci');
    req.error(new ErrorEvent('Network error'));
  });
});
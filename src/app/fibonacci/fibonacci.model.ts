package src.app.fibonacci;

export interface FibonacciResponse {
    fibonacciNumber?: number;
    errorMessage?: string;
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FibonacciService {
    private apiUrl = '/fib';

    constructor(private http: HttpClient) {}

    getFibonacci(n: number): Observable<FibonacciResponse> {
        if (isNaN(n) || n < 0) {
            return of({ fibonacciNumber: undefined, errorMessage: 'Invalid input. Please provide a non-negative integer.' });
        }

        return this.http.get<FibonacciResponse>(`${this.apiUrl}/${n}`).pipe(
            map(response => {
                if (response.fibonacciNumber !== undefined) {
                    return response;
                } else {
                    return { fibonacciNumber: undefined, errorMessage: 'Invalid input. Please provide a non-negative integer.' };
                }
            }),
            catchError(() => {
                return of({ fibonacciNumber: undefined, errorMessage: 'Invalid input. Please provide a non-negative integer.' });
            })
        );
    }
}
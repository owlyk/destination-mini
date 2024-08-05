package src.frontend.src.app.services;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  private readonly MAX_FIB_NUM = 1000;
  private readonly API_URL = 'http://backend-api/fibonacci';

  constructor(private http: HttpClient) { }

  fibList(num: number): Promise<number[]> {
    return new Promise<number[]>((resolve, reject) => {
      if (num < 0) {
        reject('Negative input is not allowed');
      } else {
        this.http.get<number[]>(`${this.API_URL}?num=${num}`).subscribe(
          (data: number[]) => {
            resolve(data);
          },
          (error) => {
            reject('Error fetching Fibonacci numbers');
          }
        );
      }
    });
  }

}
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  private readonly API_URL = 'http://localhost:3000'; // Update with actual API URL
  private readonly TRUNCATE_AFTER_THIS_MANY = 10;

  constructor(private http: HttpClient) { }

  validateInput(num: number): boolean {
    return num >= 0 && Number.isInteger(num);
  }

  async generateFibonacciNumbers(num: number): Promise<number[]> {
    const response = await this.http.get<number[]>(`${this.API_URL}/fibonacci/${num}`).toPromise();
    return response;
  }

  truncateFibonacciList(fibList: number[]): number[] {
    return fibList.slice(0, this.TRUNCATE_AFTER_THIS_MANY);
  }

  fibList(num: number): { message: string, list: number[] } {
    if (!this.validateInput(num)) {
      return { message: 'Invalid input. Please enter a non-negative integer.', list: [] };
    }

    const fibList = this.generateFibonacciNumbers(num);
    const truncatedList = this.truncateFibonacciList(fibList);

    return { message: `Generated Fibonacci numbers up to ${num}`, list: truncatedList };
  }
}
```
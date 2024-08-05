```typescript
import { TestBed } from '@angular/core/testing';
import { FibonacciService } from './fibonacci.service';

describe('FibonacciService', () => {
  let service: FibonacciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FibonacciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return error for negative input', () => {
    expect(() => service.getFibonacciNumber(-1)).toThrowError('Input must be a non-negative number');
  });

  it('should return 0 for input 0', () => {
    expect(service.getFibonacciNumber(0)).toBe(0);
  });

  it('should return 1 for input 1', () => {
    expect(service.getFibonacciNumber(1)).toBe(1);
  });

  it('should return correct Fibonacci number for input greater than 1', () => {
    expect(service.getFibonacciNumber(5)).toBe(5);
    expect(service.getFibonacciNumber(10)).toBe(55);
    expect(service.getFibonacciNumber(15)).toBe(610);
  });

  it('should handle API call successfully', () => {
    spyOn(service, 'getFibonacciNumber').and.returnValue(8);
    service.getFibonacciNumberFromAPI(6).subscribe((res) => {
      expect(res).toBe(8);
    });
  });

  it('should handle API call error', () => {
    spyOn(service, 'getFibonacciNumber').and.throwError('Internal Server Error');
    service.getFibonacciNumberFromAPI(6).subscribe({
      error: (err) => {
        expect(err).toBe('Internal Server Error');
      }
    });
  });
});
```
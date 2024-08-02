package fibonacci.component.spec;

import { FibonacciComponent } from '../src/fibonacci.component';

describe('FibonacciComponent', () => {
  
  let fibonacciComponent: FibonacciComponent;

  beforeEach(() => {
    fibonacciComponent = new FibonacciComponent();
  });

  it('should be created', () => {
    expect(fibonacciComponent).toBeTruthy();
  });

  it('should return 0 for input 0', () => {
    expect(fibonacciComponent.calculateFibonacci(0)).toEqual(0);
  });

  it('should return 1 for input 1', () => {
    expect(fibonacciComponent.calculateFibonacci(1)).toEqual(1);
  });

  it('should return 55 for input 10', () => {
    expect(fibonacciComponent.calculateFibonacci(10)).toEqual(55);
  });

  it('should return error for negative input', () => {
    expect(() => fibonacciComponent.calculateFibonacci(-1)).toThrowError('Input must be a non-negative number');
  });

});
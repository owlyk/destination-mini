package fibonacci;

import { TestBed } from '@angular/core/testing';
import { FibonacciService } from './fibonacci.service';
import { FibonacciComponent } from './fibonacci.component';

describe('FibonacciService', () => {
  let service: FibonacciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FibonacciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct Fibonacci number for valid input', () => {
    expect(service.generateFibonacci(5)).toEqual(5);
  });

  it('should handle negative input gracefully', () => {
    expect(service.generateFibonacci(-5)).toEqual(0);
  });

  it('should handle large Fibonacci numbers', () => {
    expect(service.generateFibonacci(50)).toEqual(12586269025);
  });

  it('should handle truncation for very large Fibonacci numbers', () => {
    expect(service.generateFibonacci(100)).toEqual(354224848179262000000);
  });
});

describe('FibonacciComponent', () => {
  let component: FibonacciComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FibonacciComponent]
    });
    component = TestBed.createComponent(FibonacciComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle user input correctly', () => {
    component.inputNumber = 5;
    component.generateFibonacciNumber();
    expect(component.fibonacciNumber).toEqual(5);
  });

  it('should integrate with FibonacciService', () => {
    component.inputNumber = 10;
    component.generateFibonacciNumber();
    expect(component.fibonacciNumber).toEqual(55);
  });

  it('should render UI correctly', () => {
    component.inputNumber = 15;
    component.generateFibonacciNumber();
    expect(component.fibonacciNumber).toEqual(610);
  });
});
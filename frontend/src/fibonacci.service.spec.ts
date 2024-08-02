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

  it('should return 0 for input 0', () => {
    expect(service.calculateFibonacci(0)).toEqual(0);
  });

  it('should return 1 for input 1', () => {
    expect(service.calculateFibonacci(1)).toEqual(1);
  });

  it('should return 55 for input 10', () => {
    expect(service.calculateFibonacci(10)).toEqual(55);
  });

  it('should return 1836311903 for input 46', () => {
    expect(service.calculateFibonacci(46)).toEqual(1836311903);
  });
});
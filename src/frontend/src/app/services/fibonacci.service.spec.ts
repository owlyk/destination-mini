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

  it('should return 1 for input 2', () => {
    expect(service.calculateFibonacci(2)).toEqual(1);
  });

  it('should return 2 for input 3', () => {
    expect(service.calculateFibonacci(3)).toEqual(2);
  });

  it('should return 3 for input 4', () => {
    expect(service.calculateFibonacci(4)).toEqual(3);
  });

  it('should return 5 for input 5', () => {
    expect(service.calculateFibonacci(5)).toEqual(5);
  });

  it('should return 8 for input 6', () => {
    expect(service.calculateFibonacci(6)).toEqual(8);
  });

  it('should return 13 for input 7', () => {
    expect(service.calculateFibonacci(7)).toEqual(13);
  });

  it('should return 21 for input 8', () => {
    expect(service.calculateFibonacci(8)).toEqual(21);
  });

  it('should return 34 for input 9', () => {
    expect(service.calculateFibonacci(9)).toEqual(34);
  });
});
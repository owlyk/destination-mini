package fib-foo;

describe('FibFooService', () => {
  let service: FibFooService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FibFooService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch test inputs', () => {
    const testInputs = service.getTestInputs();
    expect(testInputs).toBeDefined();
    expect(testInputs.length).toBeGreaterThan(0);
  });

  it('should handle API calls for calculating Fibonacci numbers', () => {
    const testInput = 5;
    const fibonacciNumber = service.calculateFibonacci(testInput);
    expect(fibonacciNumber).toBeDefined();
    expect(fibonacciNumber).toBeGreaterThan(0);
  });

  it('should handle error when test input is invalid', () => {
    const testInput = -1;
    const fibonacciNumber = service.calculateFibonacci(testInput);
    expect(fibonacciNumber).toBeNull();
  });

  it('should handle edge case when test input is 0', () => {
    const testInput = 0;
    const fibonacciNumber = service.calculateFibonacci(testInput);
    expect(fibonacciNumber).toBe(0);
  });
});
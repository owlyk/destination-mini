import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FibFooApiService } from './fib-foo-api.service';

describe('FibFooApiService', () => {
  let service: FibFooApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FibFooApiService]
    });
    service = TestBed.inject(FibFooApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve Fibonacci number for input value', () => {
    const inputValue = 5;
    const expectedFibonacciNumber = 5;

    service.getFibonacciNumber(inputValue).subscribe((response) => {
      expect(response).toEqual(expectedFibonacciNumber);
    });

    const req = httpTestingController.expectOne(`api/fibonacci/${inputValue}`);
    expect(req.request.method).toEqual('GET');
    req.flush(expectedFibonacciNumber);
  });

  it('should handle error when retrieving Fibonacci number', () => {
    const inputValue = -1;

    service.getFibonacciNumber(inputValue).subscribe(
      () => fail('Expected to fail'),
      (error) => {
        expect(error).toBeTruthy();
      }
    );

    const req = httpTestingController.expectOne(`api/fibonacci/${inputValue}`);
    expect(req.request.method).toEqual('GET');
    req.error(new ErrorEvent('Error'));
  });
});
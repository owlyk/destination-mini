import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FibonacciApiService } from './fibonacci-api.service';

describe('FibonacciApiService', () => {
  let service: FibonacciApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FibonacciApiService]
    });
    service = TestBed.inject(FibonacciApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the correct Fibonacci number', () => {
    const num = 5;
    const expectedResult = 5;

    service.getFibonacciNumber(num).subscribe(result => {
      expect(result).toEqual(expectedResult);
    });

    const req = httpTestingController.expectOne(`api/fibonacci/${num}`);
    expect(req.request.method).toEqual('GET');
    req.flush(expectedResult);
  });
});
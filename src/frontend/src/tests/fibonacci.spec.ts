import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FibonacciService } from '../services/fibonacci.service';
import { FibonacciComponent } from '../components/fibonacci.component';

describe('FibonacciService', () => {
  let service: FibonacciService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FibonacciService]
    });
    service = TestBed.inject(FibonacciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct Fibonacci number for valid input', () => {
    expect(service.generateFibonacci(0)).toEqual(0);
    expect(service.generateFibonacci(1)).toEqual(1);
    expect(service.generateFibonacci(5)).toEqual(5);
    expect(service.generateFibonacci(10)).toEqual(55);
  });

  it('should return error for invalid input', () => {
    expect(() => service.generateFibonacci(-1)).toThrowError('Invalid input');
    expect(() => service.generateFibonacci('abc')).toThrowError('Invalid input');
  });
});

describe('FibonacciComponent', () => {
  let component: FibonacciComponent;
  let fixture: ComponentFixture<FibonacciComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FibonacciComponent]
    });
    fixture = TestBed.createComponent(FibonacciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the Fibonacci number correctly', () => {
    component.inputValue = 5;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('5');
  });
});
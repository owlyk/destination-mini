import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FibonacciComponent } from './fibonacci.component';

describe('FibonacciComponent', () => {
  let component: FibonacciComponent;
  let fixture: ComponentFixture<FibonacciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FibonacciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FibonacciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should generate correct Fibonacci series for input 0', () => {
    component.generateFibonacciSeries(0);
    expect(component.fibonacciSeries).toEqual([]);
  });

  it('should generate correct Fibonacci series for input 1', () => {
    component.generateFibonacciSeries(1);
    expect(component.fibonacciSeries).toEqual([0]);
  });

  it('should generate correct Fibonacci series for input 5', () => {
    component.generateFibonacciSeries(5);
    expect(component.fibonacciSeries).toEqual([0, 1, 1, 2, 3]);
  });

  it('should handle negative input by generating empty series', () => {
    component.generateFibonacciSeries(-3);
    expect(component.fibonacciSeries).toEqual([]);
  });

  it('should handle non-numeric input by generating empty series', () => {
    component.generateFibonacciSeries('abc');
    expect(component.fibonacciSeries).toEqual([]);
  });
});
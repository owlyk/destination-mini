import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FibonacciTestComponent } from './fibonacci-test.component';

describe('FibonacciTestComponent', () => {
  let component: FibonacciTestComponent;
  let fixture: ComponentFixture<FibonacciTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FibonacciTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FibonacciTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate Fibonacci numbers based on user input', () => {
    expect(component.generateFibonacci(0)).toEqual([]);
    expect(component.generateFibonacci(1)).toEqual([0]);
    expect(component.generateFibonacci(2)).toEqual([0, 1]);
    expect(component.generateFibonacci(5)).toEqual([0, 1, 1, 2, 3]);
  });

  it('should handle edge cases', () => {
    expect(component.generateFibonacci(-1)).toEqual([]);
    expect(component.generateFibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});
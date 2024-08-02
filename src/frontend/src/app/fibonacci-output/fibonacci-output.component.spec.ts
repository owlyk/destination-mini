import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FibonacciOutputComponent } from './fibonacci-output.component';

describe('FibonacciOutputComponent', () => {
  let component: FibonacciOutputComponent;
  let fixture: ComponentFixture<FibonacciOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FibonacciOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FibonacciOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the Fibonacci numbers correctly', () => {
    const testNumbers = [0, 1, 1, 2, 3, 5, 8, 13];
    component.fibonacciNumbers = testNumbers;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('0, 1, 1, 2, 3, 5, 8, 13');
  });
});
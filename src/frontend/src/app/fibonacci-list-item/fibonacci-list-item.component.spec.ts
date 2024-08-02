import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FibonacciListItemComponent } from './fibonacci-list-item.component';

describe('FibonacciListItemComponent', () => {
  let component: FibonacciListItemComponent;
  let fixture: ComponentFixture<FibonacciListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FibonacciListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FibonacciListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct Fibonacci number in the list item', () => {
    component.number = 5;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('li').textContent).toContain('5');
  });
});
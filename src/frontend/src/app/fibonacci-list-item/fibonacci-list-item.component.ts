import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fibonacci-list-item',
  templateUrl: './fibonacci-list-item.component.html',
  styleUrls: ['./fibonacci-list-item.component.css']
})
export class FibonacciListItemComponent {
  @Input() fibonacciNumber: number;
}
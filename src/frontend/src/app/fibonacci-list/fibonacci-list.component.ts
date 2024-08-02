import { Component, OnInit } from '@angular/core';
import { FibonacciService } from '../services/fibonacci.service';

@Component({
  selector: 'app-fibonacci-list',
  templateUrl: './fibonacci-list.component.html',
  styleUrls: ['./fibonacci-list.component.css']
})
export class FibonacciListComponent implements OnInit {
  fibonacciNumbers: number[];

  constructor(private fibonacciService: FibonacciService) { }

  ngOnInit(): void {
    this.fibonacciNumbers = this.fibonacciService.getFibonacciNumbers();
  }
}
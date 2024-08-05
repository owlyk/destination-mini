package app.fib;

import { Component, OnInit } from '@angular/core';
import { FibonacciService } from '../services/fibonacci.service';

@Component({
  selector: 'app-fib',
  templateUrl: './fib.component.html',
  styleUrls: ['./fib.component.css']
})
export class FibComponent implements OnInit {
  title: string;

  constructor(private fibonacciService: FibonacciService) {}

  ngOnInit(): void {
    this.fibonacciService.getTitle().subscribe(title => {
      this.title = title;
    });
  }
}
package src.app.fib;

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fib',
  templateUrl: './fib.component.html',
  styleUrls: ['./fib.component.css']
})
export class FibComponent implements OnInit {
  title: string;

  ngOnInit(): void {
    this.title = 'Fibonacci Calculator';
  }
}
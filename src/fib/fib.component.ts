package src.fib;

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fib',
  templateUrl: './fib.component.html',
  styleUrls: ['./fib.component.css']
})
export class FibComponent implements OnInit {
  public title: string;

  constructor() {
    this.title = 'Dynamic Title';
  }

  ngOnInit(): void {
    this.title = 'Initialized Title';
  }
}
package my-fib;

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-fib',
  templateUrl: './output.html',
  styleUrls: ['./my-fib.component.css']
})
export class MyFibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Initialization logic here
  }

  validateArgument(arg: any): boolean {
    // Validation logic here
    return true;
  }

  fibList(n: number): number[] {
    // Fibonacci calculation logic here
    return [];
  }

}
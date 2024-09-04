package app.usage;

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.css']
})
export class UsageComponent implements OnInit {

  instructions: string;

  constructor() {
    this.instructions = 'To use the Fibonacci calculator, enter a positive integer in the input field and click the "Calculate" button. The result will display the Fibonacci number corresponding to the entered integer.';
  }

  ngOnInit(): void {}

}
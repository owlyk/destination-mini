package src.app.home;

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title: string;

  constructor() {
    this.title = 'Home';
  }

  navigateToFibonacci() {
    // Logic to navigate to Fibonacci calculation page
  }

  navigateToUsageInstructions() {
    // Logic to navigate to usage instructions
  }
}
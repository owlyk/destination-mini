package src.app.index;

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  title: string = 'Home';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToFibonacci(): void {
    this.router.navigate(['/fibonacci']);
  }

  navigateToInstructions(): void {
    this.router.navigate(['/instructions']);
  }
}
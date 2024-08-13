package app.usage;

import { Component, OnInit } from '@angular/core';
import { UsageService } from '../services/usage.service';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.css']
})
export class UsageComponent implements OnInit {
  msg: string;

  constructor(private usageService: UsageService) { }

  ngOnInit(): void {
    this.msg = 'Welcome to the Usage Component!';
    this.usageService.getData().subscribe(
      data => {
        this.msg = data.message;
      },
      error => {
        this.handleError(error);
      }
    );
  }

  handleError(error: any): void {
    this.msg = 'An error occurred: ' + error.message;
  }
}
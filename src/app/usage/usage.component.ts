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
  instructions: string;
  examples: string[];

  constructor(private usageService: UsageService) {
    this.msg = '';
    this.instructions = '';
    this.examples = [];
  }

  ngOnInit(): void {
    this.fetchDynamicMessage();
    this.instructions = 'Welcome to the Fibonacci application! Use the following URL formats to access the service:';
    this.examples = [
      'http://example.com/fibonacci?number=5',
      'http://example.com/fibonacci?number=10'
    ];
  }

  fetchDynamicMessage(): void {
    this.usageService.getDynamicMessage().subscribe(message => {
      this.msg = message;
    });
  }
}
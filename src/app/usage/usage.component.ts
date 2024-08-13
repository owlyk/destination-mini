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
    this.instructions = 'To use the Fibonacci app, enter a number in the input field and click the calculate button.';
    this.examples = [
      'http://example.com/fibonacci/5',
      'http://example.com/fibonacci/10',
      'http://example.com/fibonacci/15'
    ];
  }

  ngOnInit(): void {
    this.usageService.getDynamicMessages().subscribe(data => {
      this.msg = data.message;
    });
  }
}
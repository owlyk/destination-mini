package app.fibUsage;

import { Component, OnInit } from '@angular/core';
import { FibUsageService } from './fib-usage.service';

@Component({
  selector: 'app-fib-usage',
  templateUrl: './fib-usage.component.html',
  styleUrls: ['./fib-usage.component.css']
})
export class FibUsageComponent implements OnInit {
  usageInstructions: string;

  constructor(private fibUsageService: FibUsageService) {}

  ngOnInit(): void {
    this.fibUsageService.getUsageInstructions().subscribe(instructions => {
      this.usageInstructions = instructions;
    });
  }
}
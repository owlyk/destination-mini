package src.app.components.test-script;

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-script',
  templateUrl: './test_script.html',
  styleUrls: ['./test_script.css']
})
export class TestScriptComponent {
  constructor(private router: Router) {}

  navigateToFibonacci() {
    this.router.navigate(['/fibonacci']);
  }

  navigateToUsageInstructions() {
    this.router.navigate(['/usage-instructions']);
  }

  ngOnInit() {}
}
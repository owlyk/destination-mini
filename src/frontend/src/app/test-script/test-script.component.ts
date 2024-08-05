package test-script;

import { Component } from '@angular/core';

@Component({
  selector: 'app-test-script',
  templateUrl: './test-script.component.html',
  styleUrls: ['./test-script.component.css']
})
export class TestScriptComponent {

  testInputs: number[] = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55];
  
  getTestInputs(): number[] {
    return this.testInputs;
  }

  generateEndpointLink(input: number): string {
    return `https://example.com/fibonacci/${input}`;
  }
}
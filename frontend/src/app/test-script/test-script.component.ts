package src.app.test-script;

import { Component, OnInit } from '@angular/core';
import { TestScriptService } from '../services/test-script.service';

@Component({
  selector: 'app-test-script',
  templateUrl: './test_script.html',
  styleUrls: ['./test-script.component.css']
})
export class TestScriptComponent implements OnInit {

  constructor(private testScriptService: TestScriptService) { }

  ngOnInit(): void {
    this.initializeComponent();
  }

  initializeComponent(): void {
    // Initialization logic here
  }

  handleUserInteraction(): void {
    // Method to handle user interactions
  }

  callApi(): void {
    // Method to call API
  }
}
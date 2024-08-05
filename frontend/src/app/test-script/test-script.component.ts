package src.app.test-script;

import { Component, OnInit } from '@angular/core';
import { TestScriptService } from '../services/test-script.service';

@Component({
  selector: 'app-test-script',
  templateUrl: './test-script.component.html',
  styleUrls: ['./test-script.component.css']
})
export class TestScriptComponent implements OnInit {
  data: any;
  error: string;

  constructor(private testScriptService: TestScriptService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.testScriptService.getData().subscribe(
      response => {
        this.data = response;
      },
      err => {
        this.error = 'Error fetching data';
      }
    );
  }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-script',
  templateUrl: './test-script.component.html',
  styleUrls: ['./test-script.component.css']
})
export class TestScriptComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleClickEvent(): void {
    // Handle click event logic here
  }

  handleErrors(): void {
    // Handle error logic here
  }

}
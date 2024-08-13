package src.app.fibonacci;

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FibonacciService } from '../services/fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {
  fibonacciForm: FormGroup;
  result: string;

  constructor(private formBuilder: FormBuilder, private fibonacciService: FibonacciService) {
    this.fibonacciForm = this.formBuilder.group({
      number: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const inputValue = this.fibonacciForm.value.number;
    this.fibonacciService.getFibonacci(inputValue).subscribe(
      response => {
        this.result = response.toString();
      },
      error => {
        this.result = 'Error: ' + error.message;
      }
    );
  }
}
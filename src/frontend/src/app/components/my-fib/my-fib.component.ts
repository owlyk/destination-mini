import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-fib',
  templateUrl: './my-fib.component.html',
  styleUrls: ['./my-fib.component.css']
})
export class MyFibComponent {
  inputNumber: number;
  fibNumbers: number[];
  message: string;

  constructor(private http: HttpClient) { }

  calculateFibonacci() {
    if (this.inputNumber && Number.isInteger(this.inputNumber)) {
      this.http.get<any>(`/api/fibList/${this.inputNumber}`).subscribe(data => {
        this.fibNumbers = data.fibNumbers;
        this.message = data.message;
      });
    } else {
      this.fibNumbers = [];
      this.message = 'Please provide a valid integer input.';
    }
  }
}
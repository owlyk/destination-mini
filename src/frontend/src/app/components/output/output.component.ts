import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  fibonacciNumbers: number[];
  message: string;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getFibonacciData().subscribe(data => {
      this.fibonacciNumbers = data.fibonacciNumbers;
      this.message = data.message;
    });
  }
}
package app.components.index;

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  navigateToFibonacci(): void {
    this.router.navigate(['/fibonacci']);
  }
}
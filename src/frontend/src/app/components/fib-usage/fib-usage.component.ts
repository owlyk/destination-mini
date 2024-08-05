import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fib-usage',
  templateUrl: './fib-usage.component.html',
  styleUrls: ['./fib-usage.component.css']
})
export class FibUsageComponent {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('api/fib').subscribe((data: any) => {
      document.getElementById('usage').innerHTML = data.usage;
    });
  }

}
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-script',
  templateUrl: './test_script.html'
})
export class TestScriptComponent {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('api/test_script').subscribe((data: any) => {
      // Render test_script.html template with data
    });
  }
}
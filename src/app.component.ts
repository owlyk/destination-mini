package src;

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <h1>My Application</h1>
    </header>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {}
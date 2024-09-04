package app;

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsageComponent } from './usage/usage.component';

const routes: Routes = [
  { path: 'usage', component: UsageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-usage',
  template: `
    <div class="usage-container">
      <h1>Fibonacci Calculator Instructions</h1>
      <p>To use the Fibonacci calculator, please follow these steps:</p>
      <ol>
        <li>Enter a number in the input field.</li>
        <li>Click the "Calculate" button.</li>
        <li>The Fibonacci number for the entered value will be displayed.</li>
      </ol>
      <p>Ensure that the number is a non-negative integer.</p>
    </div>
  `,
  styles: [`
    .usage-container {
      padding: 20px;
      max-width: 600px;
      margin: auto;
      text-align: left;
    }
    h1 {
      font-size: 24px;
      margin-bottom: 10px;
    }
    p, ol {
      font-size: 16px;
    }
  `]
})
export class UsageComponent { }
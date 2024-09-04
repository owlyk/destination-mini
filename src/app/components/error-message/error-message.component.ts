package app.components.error-message;

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  template: `
    <div *ngIf="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>
  `,
  styles: [`
    .error-message {
      color: red;
      font-weight: bold;
    }
  `]
})
export class ErrorMessageComponent {
  @Input() errorMessage: string;
}
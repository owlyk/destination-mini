```typescript
package src.frontend.src.app.test-script.test-script.component.ts

import { Component } from '@angular/core';

const TRUNCATE_AFTER_THIS_MANY: number = 10;

function fibList(num: number): string {
  let a: number = 0;
  let b: number = 1;
  let result: string = '0, 1';

  for (let i = 2; i < num; i++) {
    const next = a + b;
    result += `, ${next}`;
    a = b;
    b = next;
  }

  return result;
}

@Component({
  selector: 'app-test-script',
  templateUrl: './test_script.html',
  styleUrls: ['./test_script.css']
})
export class TestScriptComponent {
  constructor() {}

  renderTemplate(): void {
    // Implement rendering logic here
  }

  generateFibonacciList(num: number): string {
    return `Fibonacci numbers up to ${num}: ${fibList(num)}`;
  }
}
```
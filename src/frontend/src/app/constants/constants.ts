import { Injectable } from '@angular/core';

export const TRUNCATE_AFTER_THIS_MANY: number = 10;

@Injectable()
export class Constants {
  fibList(num: number): number[] {
    let fibs: number[] = [0, 1];
    for (let i = 2; i < num; i++) {
      fibs[i] = fibs[i - 1] + fibs[i - 2];
    }
    return fibs;
  }
}
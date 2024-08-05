import { truncate } from 'lodash';

export function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    }
    
    let a = 0;
    let b = 1;
    let temp = 0;
    
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    
    return truncate(temp, { precision: 0 });
}
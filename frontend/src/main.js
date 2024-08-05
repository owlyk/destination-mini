import { calculateFibonacci } from './utils';

document.getElementById('calculateBtn').addEventListener('click', function() {
    const input = document.getElementById('numberInput').value;
    const result = calculateFibonacci(input);
    document.getElementById('result').innerText = result.join(', ');
});
```javascript
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('numberInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const number = parseInt(input.value);
        if (isNaN(number)) {
            result.textContent = 'Please enter a valid number';
        } else {
            result.textContent = fibonacci(number);
        }
    });

    function fibonacci(n) {
        if (n <= 1) {
            return n;
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    }
});
```
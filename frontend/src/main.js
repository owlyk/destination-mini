import axios from 'axios';

document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('userInput');
    const resultField = document.getElementById('result');

    document.getElementById('calculateBtn').addEventListener('click', function() {
        const userInput = inputField.value.trim();

        if (userInput === '') {
            alert('Please enter a number');
            return;
        }

        if (isNaN(userInput)) {
            alert('Please enter a valid number');
            return;
        }

        axios.post('/calculateFibonacci', { number: userInput })
            .then(function(response) {
                resultField.textContent = response.data.join(', ');
            })
            .catch(function(error) {
                resultField.textContent = 'Error calculating Fibonacci series';
            });
    });
});
import axios from 'axios';

const form = document.querySelector('form');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const numbers = formData.get('numbers').split(',').map(Number);
    const limit = formData.get('limit');

    try {
        const response = await axios.post('/fibonacci/truncate', { numbers, limit });
        const { truncatedNumbers, message } = response.data;

        resultDiv.innerHTML = `
            <p>Truncated Fibonacci Numbers: ${truncatedNumbers.join(', ')}</p>
            <p>${message}</p>
        `;
    } catch (error) {
        resultDiv.innerHTML = `<p>Error: ${error.response.data.message}</p>`;
    }
});
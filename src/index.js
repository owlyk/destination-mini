```javascript
const form = document.querySelector('form');
const result = document.querySelector('#result');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const numbers = document.querySelector('#numbers').value.split(',').map(num => parseInt(num));
    
    const response = await fetch('/fibonacci/sum', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ numbers })
    });
    
    const data = await response.json();
    
    result.textContent = data.result;
});
```
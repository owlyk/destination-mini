package frontend;

document.getElementById('validateButton').addEventListener('click', function() {
    const userInput = document.getElementById('inputField').value;
    const validationMessage = validateFibonacciInput(userInput);
    document.getElementById('validationMessage').innerText = validationMessage;
});
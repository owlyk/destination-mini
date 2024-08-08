package src;

const header = 'How to use the Fibonacci web app';

function displayMessage(msg) {
    console.log(`\x1b[31m${msg}\x1b[0m`);
}

const instructions = `To use the Fibonacci web app, append a number to the URL in the following format: 
http://yourdomain.com/fib/{number}, where {number} is the Fibonacci sequence position you want to calculate.`;

const examples = ['/fib/5', '/fib/20', '/fib/10', '/fib/15'];

function displayExamples() {
    examples.forEach(example => {
        console.log(`Example URL: ${example}`);
    });
}

const testCasesLink = 'http://yourdomain.com/test-cases';

function main() {
    console.log(header);
    displayMessage('Dynamic message can be displayed here.');
    console.log(instructions);
    displayExamples();
    console.log(`For more test cases, visit: ${testCasesLink}`);
}

export { main };
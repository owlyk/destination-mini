package src;

export function displayUsageInstructions(msg) {
    console.log('\x1b[36mHow to use the Fibonacci web app\x1b[0m');
    if (msg) {
        console.log(`\x1b[31m${msg}\x1b[0m`);
    }
    console.log('To use the application, you can access the following URL format:');
    console.log('http://yourdomain.com/fibonacci?number=<your_number>');
    console.log('Examples of valid URLs:');
    console.log('- http://yourdomain.com/fibonacci?number=5');
    console.log('- http://yourdomain.com/fibonacci?number=10');
    console.log('- http://yourdomain.com/fibonacci?number=20');
    console.log('For additional test cases, visit: http://yourdomain.com/test-cases');
    console.log('Thank you for using the Fibonacci web app!');
}
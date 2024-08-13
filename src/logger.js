package logger;

function logRequest(inputValue, response) {
    const logEntry = {
        timestamp: new Date().toISOString(),
        input: inputValue,
        response: response
    };
    console.log(JSON.stringify(logEntry));
}

module.exports = { logRequest };
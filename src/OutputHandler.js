package src;

class OutputHandler {
    displayOutput(fibNumbers, message) {
        if (message) {
            console.log(message);
        }
        console.log("Fibonacci Sequence: " + fibNumbers.join(", "));
    }
}
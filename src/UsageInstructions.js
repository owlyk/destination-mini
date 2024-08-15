package UsageInstructions;

const UsageInstructions = {
    title: "Fibonacci Calculator Usage Instructions",
    description: "This calculator computes Fibonacci numbers based on the input provided. The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.",
    inputInstructions: "You can input a non-negative integer. The calculator will return the Fibonacci number at that position in the sequence. Valid formats include whole numbers (e.g., 0, 1, 2, 3, ...).",
    edgeCases: "If the input is negative, the calculator will return an error message. If the input is not a number, it will also return an error message.",
    examples: [
        { input: 0, output: 0 },
        { input: 1, output: 1 },
        { input: 2, output: 1 },
        { input: 3, output: 2 },
        { input: 4, output: 3 },
        { input: 5, output: 5 },
        { input: 6, output: 8 },
        { input: 7, output: 13 }
    ]
};

module.exports = UsageInstructions;
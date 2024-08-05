package src;

export function getFibonacciInfo() {
    const response = {
        description: "The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.",
        significance: "The Fibonacci sequence appears in various areas of mathematics and nature, including the golden ratio, which is closely related to the sequence.",
        applications: "Common applications of the Fibonacci sequence include algorithms in computer science, financial modeling, and patterns in biological settings."
    };
    return JSON.stringify(response);
}
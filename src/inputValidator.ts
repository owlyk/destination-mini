package src;

export function isValidInput(input: string): boolean {
    const positiveIntegerRegex = /^\d+$/;
    const scientificNotationRegex = /^\d+(\.\d+)?e\d+$/i;
    return positiveIntegerRegex.test(input) || scientificNotationRegex.test(input);
}
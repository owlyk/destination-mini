package fibonacci;

export interface FibonacciResponse {
    sequence: number[];
    message: string;
}

export class FibonacciService {
    private static MAX_LIMIT = 10000;

    public static getFibonacciSequence(input: number): FibonacciResponse {
        if (isNaN(input) || input < 0 || input > this.MAX_LIMIT) {
            return { sequence: [], message: 'Input must be a valid number between 0 and 10,000.' };
        }

        const sequence: number[] = [];
        let a = 0, b = 1;

        while (a <= input) {
            sequence.push(a);
            const next = a + b;
            a = b;
            b = next;
        }

        const message = input > this.MAX_LIMIT ? 
            'Fibonacci sequence generated successfully, but input exceeds 10,000 and is truncated.' : 
            'Fibonacci sequence generated successfully.';
        
        return { sequence, message };
    }
}

export class FibonacciUI {
    private inputElement: HTMLInputElement;
    private outputElement: HTMLElement;

    constructor(inputId: string, outputId: string) {
        this.inputElement = document.getElementById(inputId) as HTMLInputElement;
        this.outputElement = document.getElementById(outputId) as HTMLElement;
        this.setupEventListeners();
    }

    private setupEventListeners(): void {
        this.inputElement.addEventListener('input', () => {
            const inputValue = parseInt(this.inputElement.value, 10);
            const response = FibonacciService.getFibonacciSequence(inputValue);
            this.displayOutput(response);
        });
    }

    private displayOutput(response: FibonacciResponse): void {
        this.outputElement.innerHTML = `
            <p>${response.message}</p>
            <p>Sequence: ${response.sequence.join(', ')}</p>
        `;
    }
}
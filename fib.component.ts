package fibComponent;

const TRUNCATE_AFTER_THIS_MANY: number = 10;

class FibComponent {
    validateInput(input: number): boolean {
        return !isNaN(input) && input > 0 && Number.isInteger(input);
    }

    generateFibonacci(input: number): number[] {
        let fibNumbers: number[] = [];
        if (input === 1) {
            fibNumbers.push(0);
        } else if (input === 2) {
            fibNumbers.push(0, 1);
        } else {
            fibNumbers.push(0, 1);
            for (let i = 2; i < input; i++) {
                fibNumbers.push(fibNumbers[i - 1] + fibNumbers[i - 2]);
            }
        }
        return fibNumbers;
    }

    renderOutput(numbers: number[], message: string): void {
        const outputDiv = document.getElementById('output');
        if (outputDiv) {
            let outputHtml = '<ul>';
            numbers.forEach(num => {
                outputHtml += `<li>${num}</li>`;
            });
            outputHtml += `</ul><p>${message}</p>`;
            outputDiv.innerHTML = outputHtml;
        }
    }
}
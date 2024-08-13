package fibonacci;

const TRUNCATE_AFTER_THIS_MANY = 1e4;

function fibList(num) {
    let fibNumbers = [];
    let message = '';

    if (num < 0) {
        return { fibNumbers: [], message: 'Invalid input: negative number' };
    }

    if (num > TRUNCATE_AFTER_THIS_MANY) {
        num = TRUNCATE_AFTER_THIS_MANY;
        message = `Input truncated to ${TRUNCATE_AFTER_THIS_MANY}`;
    }

    if (num === 0) return { fibNumbers: [], message: '' };
    if (num === 1) return { fibNumbers: [0], message: '' };
    if (num === 2) return { fibNumbers: [0, 1], message: '' };

    fibNumbers.push(0, 1);

    for (let i = 2; i < num; i++) {
        fibNumbers.push(fibNumbers[i - 1] + fibNumbers[i - 2]);
    }

    return { fibNumbers, message };
}
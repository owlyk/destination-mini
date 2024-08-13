package src.constants;

const TRUNCATE_AFTER_THIS_MANY = 10000;

function fibList(count) {
    if (count > TRUNCATE_AFTER_THIS_MANY) {
        count = TRUNCATE_AFTER_THIS_MANY;
        console.log(`Count exceeded limit. Truncating to ${TRUNCATE_AFTER_THIS_MANY}.`);
    }
    const fibNumbers = [];
    let a = 0, b = 1;
    for (let i = 0; i < count; i++) {
        fibNumbers.push(a);
        [a, b] = [b, a + b];
    }
    return fibNumbers;
}

export { TRUNCATE_AFTER_THIS_MANY, fibList };
package frontend.src.app.utils;

const TRUNCATE_AFTER_THIS_MANY = 10;

export function fibList(num: number): number[] {
    if (num < 0) {
        throw new Error("Input cannot be negative");
    }

    const result: number[] = [];
    let a = 0, b = 1;

    for (let i = 0; i < num; i++) {
        result.push(a);
        const temp = a + b;
        a = b;
        b = temp;
    }

    if (result.length > TRUNCATE_AFTER_THIS_MANY) {
        result.splice(TRUNCATE_AFTER_THIS_MANY);
    }

    return result;
}
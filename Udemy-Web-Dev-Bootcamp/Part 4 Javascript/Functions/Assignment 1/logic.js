function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }

    return false;
}

function factorial(num) {
    let ans = 1;

    for (let i = num; i >= 1; --i) {
        ans *= i;
    }

    return ans;
}

function kebabToSnake(text) {
    return text.replace(/-/g, "_");
}
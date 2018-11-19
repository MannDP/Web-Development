function printReverse(array) {
    for (let i = array.length - 1; i >= 0; --i) {
        console.log(array[i]);
    }
}

function isUniform(array) {
    let firstItem = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] !== firstItem) {
            return false;
        }
    }

    return true;
}

function sumArray(array) {
    let sum = 0;
    array.forEach(function(number) {
        sum += number;
    });

    return sum;
}

function max(array) {
    let max = array[0];
    array.forEach(function(number) {
        if (number > max) {
            max = number;
        }
    });

    return max;
}
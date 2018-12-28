function average(arr) {
    if (arr && arr.length > 0) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        let avg = sum / arr.length;
        return Math.round(avg);
    }
    else {
        console.log("Error: input does not match specifications");
        return;
    }
}

const scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

const scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2)); 

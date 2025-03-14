const numbers = [5, 8, 5, 7, 8];
let kaliarry = [];

for (let num of numbers) {
    if (kaliarry.includes(num) === false) {
        kaliarry.push(num);
    }
}

console.log(kaliarry);
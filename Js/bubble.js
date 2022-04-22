"use sctrict";
let buble = [];
let userCount = +prompt(`how many numbers you want in array?`,"");

do {
    buble.push(+prompt(`enter a number. enter 0 to stop `,"0"));
    } 
    while (buble.length < userCount);
let
    a = 0,
    b = 0,
    counterA = 0,
    counterB = 0;

while (a <= buble.length) {
    b++;
    while (b <= buble.length) {
        if (buble[a] > buble[b]) {
            let temp = buble[a];
            buble[a] = buble[b];
            buble[b] = temp;
            b++;
            counterB++;
        } else {
            b++;
        }

    }
    a++;
    b = a;
    counterA++;
}

console.log(buble);
console.log(`Number of loops: ${counterA}+${counterB}=${counterA + counterB}`);
console.log(buble.length, ` items in array`);
document.write(`your array: `, buble);
document.write(`     number of loops: `, counterA + counterB);
document.close;

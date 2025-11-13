const colors = ["red", "blue", "green", "yellow", "orange"];
// colors.reverse();
// console.log(colors);

// const col = [];
// for (let n = 0; n < colors.length; n++) {
//     const colo = colors[n];
//     // console.log(colo);
//     col.unshift(colo);
// }
// console.log(col);

// const rev = [];
// for (let i = colors.length - 1; i >= 0; i--) {
//     console.log(i);
//     const rong = colors[i];
//     console.log(rong);
//     rev.unshift(rong);
// }
// console.log(rev);

// while loop*****
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let n = 0;
const sohag = [];
while (n < numbers.length) {
    // console.log(n);
    const num = numbers[n];
    console.log(num);
    n++;
    sohag.unshift(num);
}
console.log(sohag);

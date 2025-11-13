const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// normal ****//

// console.log(numbers);
// numbers.reverse();
// console.log(numbers);

// for of reverse *****//

// const rev_numbers = [];
// for (const num of numbers) {
//     console.log(num);
//     rev_numbers.unshift(num);
// }
// console.log(rev_numbers);

// for loop reverse *****// Array start to -> end

const rev2_numbers = [];
for (let n = 0; n < numbers.length; n++) {
    // console.log(n);
    const num = numbers[n];
    rev2_numbers.unshift(num);
}
console.log(rev2_numbers);

// for loop reverse ****// Array end to - > start

// const reverse = [];
// for (let i = numbers.length - 1; i >= 0; i--) {
//     // console.log(i);
//     const num = numbers[i];
//     console.log(num);
//     reverse.push(num);
// }
// console.log(reverse);

const names = ["akash", "bikash", "sumon", "varat", "kajol", "madhu"];
const sortname = names.sort();
// console.log(sortname);

const numbers = [6, 12, 5, 24, 9, 33, 7];

const asc_numbers = numbers.sort(function (a, b) {
    return a - b;
});
// console.log(asc_numbers);

numbers.sort(function (a, b) {
    return b - a;
});
console.log(numbers);

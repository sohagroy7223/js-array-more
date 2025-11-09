/**
 *
 * looping technique
 * 1. for loop
 * 2.while loop
 * 3.do while
 * 4.for of------>array loop korar jonno
 * 5.for in ----->object loop korar jonno
 *
 */
const friends = ["Elon", "mark", "Bill", "waren", "dadf"];

// for of js file****

for (const friend of friends) {
    // console.log(friend);
}

// for loop js file****

for (let i = 0; i < 10; i++) {
    // console.log(i);
    // console.log(friends[i]);
}

for (let n = 0; n < friends.length; n++) {
    // console.log(n);
    // console.log(friends[n]);
}

// while loop *****

let n = 0;
while (n < friends.length) {
    // console.log(n);
    // console.log(friends[n]);

    n++;
}

const numbers = [23, 46, 68, 35, 23, 67, 90, 68, 34, 43, 56];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

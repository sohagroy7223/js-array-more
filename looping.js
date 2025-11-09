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
for (const friend of friends) {
    // console.log(friend);
}

for (let i = 0; i < 10; i++) {
    // console.log(i);
}

for (let n = 0; n < friends.length; n++) {
    console.log(n);
    console.log(friends[n]);
}

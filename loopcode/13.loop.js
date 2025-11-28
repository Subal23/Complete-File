// Print Even numbers from 1 to 20
// let i = 1;
// while (i <= 20) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
//     i++;

// count how many digits are there in a number
let number = 4571;
function countDigits(num) {
    let count = 0;
    if (number === 0) return 1; 
    while (number > 0) {
        number = Math.floor(number / 10);
        count++;
    }
    return count;
}
console.log(countDigits(num));

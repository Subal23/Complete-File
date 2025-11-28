// Continually read array items until a condition is met

// Example:
// Given [2, 5, -1, 8, 9]
// Stop when encountering -1.
let numbers = [2, 5, -1, 8, 9];
function readUntilNegative(arr) {
let i=0;
while(i<arr.length){
    if(arr[i]===-1){
        console.log("stopped at-1")
        break;
    }
    console.log(arr[i]);i++;
}
}
readUntilNegative(numbers);
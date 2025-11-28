let num=[100,200,300,400,500];
let sum=0;
for(let i=0;i<num.length;i++){
    sum+=num[i];
}
let avg=sum/num.length;
console.log("Average:",avg);

let results=num.filter(number => number > avg);
console.log("Numbers greater than average:",results);
// let count=0;
// for(let i=0;i<results.length;i++){
//     count++;
// }  
// console.log("Count of numbers greater than average:",count);
// let doubled=num.map(number => number * 2);
// console.log("Doubled Numbers:",doubled);
// let sorted=num.sort((a,b) => b - a);
// console.log("Sorted Numbers (Descending):",sorted);
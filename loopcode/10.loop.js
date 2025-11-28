let colors = ["red", "blue", "green"];

console.log(colors.includes("blue")); 
console.log(colors.includes("yellow"));

let added = colors.push("yellow");  
console.log(added);
console.log(colors);

let shifted = colors.shift();  
console.log(shifted);
console.log(colors);

let unshifted = colors.unshift("purple");  
console.log(unshifted);
console.log(colors);

let popped = colors.pop();
console.log(popped);
console.log(colors);

let spliced = colors.splice(1,1, "orange");  
console.log(spliced);
console.log(colors);

let sliced = colors.slice(0, 5);  
console.log(sliced);
console.log(colors);

let index = colors.indexOf("green");  
console.log(index);
let notFoundIndex = colors.indexOf("pink");  
console.log(notFoundIndex);

let joined = colors.join(", "); 
console.log(joined);
console.log(colors);

let reversed = colors.reverse();  
console.log(reversed);
console.log(colors);

let sorted = colors.sort();  
console.log(sorted);
console.log(colors);

let length = colors.length;  
console.log(length);
console.log(colors);

let reversedAgain = colors.reverse();  
console.log(reversedAgain);
console.log(colors);

let reversedCopy = [...colors].reverse();  
console.log(reversedCopy);
console.log(colors);    

console.log(colors);
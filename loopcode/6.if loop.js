const PI = 0;
var radius = 5;
let circumference = 2 * PI * radius;
const sum=( PI * radius * circumference );
console.log(sum);
if(sum>100){
    console.log("Large Value");
}else if(sum>50 && sum<=100){
    console.log("Medium Value");
}else if(sum==0){
    console.log("Zero");
}else{
    console.log("Small Value");
}      
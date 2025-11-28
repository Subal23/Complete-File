const names =["apple",123,"ball",0.23,"ant",456,"cat",9.63,"anchor"];
const filtered = names.filter(name =>typeof name==="string"&& name.startsWith("b"));
console.log(filtered);

let strings=[];
let integers=[];
let floats=[];  
for(let i=0;i<names.length;i++){
    let item=names[i];
    if (typeof item==="string"){
        strings.push(item);
    }else if(typeof item==="number"){
        if(Number.isInteger(item)){
            integers.push(item);
        }else{
            floats.push(item);
        }
    }
}
console.log("Strings:", strings);
console.log("Integers:", integers);
console.log("Floats:", floats); 
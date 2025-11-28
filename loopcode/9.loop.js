let data=["apple",123,"grape",0.25,"orange",42,"banana",3.14,"kiwi",100];

let strings=[];
let integers=[];
let floats=[];  

for(let i = 0; i < data.length; i++){
    let item=data[i];
    if(typeof item==="string"){
        strings.push(item);
    }
    else if(typeof item==="number"){
        if(Number.isInteger(item)){
            integers.push(item);
        }
        else{
            floats.push(item);
        }
    }
}
console.log("Strings:", strings);
console.log("Integers:", integers);
console.log("Floats:", floats);

let result = {
    allinteger: data.filter(item=>typeof item==="number"&&Number.isInteger(item)),
    allstring: data.filter(item=>typeof item==="string"),
    allfloat: data.filter(item=>typeof item==="number"&&!Number.isInteger(item))
};

console.log(result);

let output = {
    findinteger:data.find(item=>typeof item==="string"),
    findstring:data.find(item=>typeof item==="number"&&Number.isInteger(item)),
    findfloat:data.find(item=>typeof item==="number"&&!Number.isInteger(item))
};

console.log(output);


let results = {
    findlastinteger:data.findLast(item=>typeof item==="string"),
    findlaststring:data.findLast(item=>typeof item==="number"&&Number.isInteger(item)),
    findlastfloat:data.findLast(item=>typeof item==="number"&&!Number.isInteger(item))
};

console.log(results);
const prompt=require("prompt-sync")({sigint:true}); 
// program to calculate how to find factorial
n=prompt("enter a number: ")
let arr=[]
for (let index = 1; index <= n; index++) {
    arr.push(index)
}

const red=(a,b)=>{
    return a*b
}

console.log(arr.reduce(red))

let fact=1
for (let index = 1; index <= n; index++) {
    fact=fact*index
}

console.log(fact)

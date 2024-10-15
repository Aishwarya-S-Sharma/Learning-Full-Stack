// Create a faulty calculator using javascript


/*This does:
1.It takes two numbers as input from user
2. It perform wrong opertions 


+-->-
*-->+
---./
/-->**

it performs wrong operations 10% of the times
*/
const prompt=require("prompt-sync")({sigint:true}); 

console.log("Faulty Calculater")
let a = prompt("Enter number 1 : ");
let b = prompt("Enter number 2 : ");

let random=Math.random()

if (random<0.1){
    console.log("Addition : ",a-b);
    console.log("Multiplication : ",a+b);
    console.log("Subtraction : ",a/b);
    console.log("Division : ",a**b);
}
else{
    console.log("Addition : ",a+b);
    console.log("Multiplication : ",a*b);
    console.log("Subtraction : ",a-b);
    console.log("Division : ",a/b);
}
async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Done")
        },1000)
    })
}


function sum(a,b,c){
    return a+b+c;

}
(async function main(){
    // var a1;
    console.log(a1);
// let a = await sleep()
//     console.log(a)
// let b=await sleep()
// console.log(b)
// let [x,y,...rest]=[1,5,7,8];
// console.log(x,y,rest)

// let obj={
//     a:1,
//     b:2,
//     c:3,
//     d:4,
//     e:5,
//     f:6,
//     g:7,
//     h:8,
// }

// const {a,b}=obj;

// console.log(a,b)

// let arr=[1,4,5,6,7,8,9,10,11,12,13,14]
// console.log(sum(...arr))



})()

var a1=5;



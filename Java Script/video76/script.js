// async function getData(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             resolve(455)
//         },1000)
//     })
// }

async function getData(){
    let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data=await x.json();
    console.log(x)
    return 455
      
}

async function main(){
    console.log("loading")
    console.log("do something...")
    console.log("load data")
    let data=await getData();
    console.log(data)
    console.log("process data...")
    console.log("task 2")
    // return data
}

main()

// console.log("loading")
// console.log("do something...")
// console.log("load data")
// let data=await getData();
// console.log(data)
// console.log("process data...")
// console.log("task 2")
// data.then(()=>{
//     console.log(data)
//     console.log("process data...")
//     console.log("task 2")
// })

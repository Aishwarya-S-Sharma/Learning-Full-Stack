console.log("This is a promise");

let prom1=new Promise((resolve,reject)=>{
    let a=Math.random()
    if(a<0.5){
        reject("No random number was not rejecting u")
    }
    else{
        setTimeout(()=>{
            console.log("yes ")
            resolve("Promise Resolved")
        },2000)
    }
    }
    )

prom1.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
})
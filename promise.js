let p=new Promise((resolve)=>{
    console.log("Value")
    resolve("Fulfilled")
})

p.then((result)=>{
    console.log(result)
})

//In promise "resolve" uses then method and "reject" uses catch method
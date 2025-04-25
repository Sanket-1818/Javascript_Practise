function Postdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Fetching post data");
            resolve()
        },2000 );
    })
}

function linkeddashboard(id){
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(id){
                resolve("Success");
            }
            else{
                reject("Error");
            }
        },2000);
      });
}






linkeddashboard("100")
.then(()=>fetchPostdata())
.then(()=>{
    console.log("Fetching followers data");
})

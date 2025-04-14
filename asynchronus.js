// function Task1(){
//         console.log("Task 1 started")
//     console.log("Task 1 is completed")
//     }
    
//     function Task2(){
//         console.log("Task 2 started")
    
//         let start=Date.now()
//         let delay=2000
//         let end=start+delay
//         console.log("Task 2 is executing")
//         while(Date.now()<end){
//     }
    
//     console.log("Task 2 is completed")
//     }
    
//     function Task3(){
//         console.log("Task 3 started")
    
//         let start=Date.now()
//         let delay=2000
//         let end=start+delay
//         console.log("Task 3 is executing")
//         while(Date.now()<end){
//     }
    
//     console.log("Task 3 is completed")
//     }

//     function Task4(){
//         console.log("Task 4 started")
//         console.log("Task 4 is completed")
//     }
    
// Task1()
// setTimeout(Task2, 2000) //Setting the asynchronus function
// setTimeout(Task3, 1000)
// Task4()
    

function Task(){
    console.log("Task Started")
    console.log("Task is executing")
}
let stopid=setInterval(Task,2000)
setInterval(()=>clearInterval(stopid),10000); //This will stop the interval after 10 seconds here we used arrow function
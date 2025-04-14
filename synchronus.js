// //synchronus function
// let a=10
// let b=20
// let result=a+b
// console.log(result)

// //-------------------------------------------------------------------------------------------------------//

// //Asynchronus function

// function Task1(){
//     console.log("Task 1 started")

//     let start=Date.now()
//     let delay=5000
//     let end=start+delay
//     console.log("Task 1 is executing")
//     while(Date.now()<end){
// }
// console.log("Task 1 is completed")
// }

// function Task2(){
//     console.log("Task 2 started")

//     let start=Date.now()
//     let delay=10000
//     let end=start+delay
//     console.log("Task 2 is executing")
//     while(Date.now()<end){
// }

// console.log("Task 2 is completed")
// }

// function Task3(){
//     console.log("Task 3 started")

//     let start=Date.now()
//     let delay=15000
//     let end=start+delay
//     console.log("Task 3 is executing")
//     while(Date.now()<end){
// }

// console.log("Task 3 is completed")
// }

// Task1()
// Task2()
// Task3()

//-----------------------------------------------//

function loadkidsimages(){
    
    
    let start=Date.now()
    let delay=5000
    let end=start+delay
    console.log("k_img is executing")
    while(Date.now()<end){
}
    
console.log("kids images loaded")
}

function loadwomensection(){
    
    time.sleep(5000)
    let start=Date.now()
    
    let delay=6000
    let end=start+delay
    console.log("women_section is executing")
    while(Date.now()<end){
}
    
console.log("womens section loaded")
}

function loadmobileimage(){
    
    
    let start=Date.now()
    let delay=8000
    let end=start+delay
    console.log("mob_img is executing")
    while(Date.now()<end){
}
    
console.log("mobile image loaded")
}

loadkidsimages()
loadwomensection()
loadmobileimage()
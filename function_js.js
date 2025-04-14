// Built-in Function

// alert
// var a=5
// var b=9
// alert(a+b)

// confirm
// var a=10
// var b=20
// confirm(a+b)

// prompt
// var str1=prompt("Enter Str1")
// var str2=prompt("Enter Str2")
// console.log(str1+str2)

// parseInt
// var str1=parseInt(prompt("Enter Str1"))
// var str2=parseInt(prompt("Enter Str2"))
// console.log(str1+str2)

// parsefloat
// var str1=parseFloat(prompt("Enter Str1"))
// var str2=parseFloat(prompt("Enter Str2"))
// console.log(str1+str2)

// sqrt
// var num1=parseFloat(prompt("Enter num1"))
// var root=Math.sqrt(num1)
// console.log(root)



// ----------------------------------------------------------------------------------------------------------------------------------------------



// function decleration

// function with parameter
// function add(a,b){
//     console.log(a+b)
// }
// add(5,4)

// function returning value
// function add(a,b){
//     return a+b
// }
// result=add(5,2)
// console.log(result)

// function without parameter
// function add(){
//     var a=parseInt(prompt("Enter a"))
//     var b=parseInt(prompt("Enter b"))
//     console.log(a+b)
// }
// add()


// UserDefined Function

// i.Function Expression
// syntax
// var fun_name=function(parameter){

// }
// var display=function(a,b){
//     var a;
//     var b;

//     if(a>b){
//         console.log('A is greater');
//     }
//     else{
//         console.log("B is greater")
//     }
// }
// display(4,5)

// ii.Anonymus function
// let greet=function(name){
//     return "Hello,"+name+"!"
// }
// console.log(greet("Rahul"))

// (function(){
//     console.log("Hi")
// })
// ()

setTimeout(function(){
    alert("This fun runs after 2s")
},2000)
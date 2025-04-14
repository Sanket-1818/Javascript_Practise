// let s="JavaSceript" //First method to create a string
// let n='Sanket'  //Second method to create a string

// let r=`Hi ${n}` //Third method to create a string,It is called string template literal
// console.log(r) 

// let i='java'
// let j='JAVA'
// console.log(i==j)

// let s='JavaScript'
// let n='JavaScript'
// let s1=new String('JavaScript')
// console.log(s==n) //true
// console.log(s===s1) //false because s1 is an object and s is a string
// console.log(typeof(s))
// console.log(typeof(s1))

// s[2]='a'
// console.log(s) //s[2] is not changed because string is immutable

//---------------------------------------------------------------------------------------------------------------------//

// // String Methods
// let s='Java'
// let n='Script'
// console.log(s+n)// concatenation of two strings
// console.log(s.concat(n)) //concat method to concatenate two strings

// let c='cat'
// let s="b"+c.slice(1)
// console.log(s) //Replacing the character in the string using slice method

// let c='cat'
// console.log(c.toUpperCase())// //Converting the string to upper case

// let d='DOG'
// console.log(d.toLowerCase())// //Converting the string to lower case


// let ui=" Sanket | Sank@mail.com | JS developer "
// let p=ui.split('|')
// console.log(p)
// for(let i=0;i<p.length;i++){
//     p[i]=p[i].trim()
// }
// console.log(p)

// let a='JavaScript is a good but JavaScript is also good but JavaScript is also Bad'
// let b=a.replaceAll('JavaScript','JS')
// console.log(b)

// let ui=" Sanket | Sank@mail.com | JS developer and py"
// console.log(ui.indexOf('and')) 
// console.log(ui.slice(0,ui.indexOf('and')).trim())

// let validmail=email.includes("@") && email.endswith(".com")
// console.log(validmail)//Validation of Email

let sep='-'
console.log(sep.repeat(30))

let Name='sandeep'
let name=`Name: ${Name}`

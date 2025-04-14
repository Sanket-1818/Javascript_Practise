let arr=[10,20,30,40,50]
console.log(arr)

arr.push(60)  //Adding element at the end
console.log(arr)

arr.unshift(70)  //Adding element at the beginning
console.log(arr)

arr.pop()  //Deleting element at the end
console.log(arr)

arr.shift()  //Deleting element at the beginning
console.log(arr)

arr.splice(2,2) //Deleting element at the middle of array
console.log(arr)

arr.splice(2,0,60) //Adding element using splice
console.log(arr)

//in case of variables

let a=10
let b=a
b=b+1
console.log(a)
console.log(b)

//in case of array
let arr=[10,20,30]
let brr = arr
brr[0]= brr[0]+5
console.log(arr)
console.log(brr)
console.log(typeof(arr))
console.log(typeof(brr))

//because array is an object so basically we are assigning new name to array
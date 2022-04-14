//Concept of variable scope in function

function change(a)
{
    a=a+10
    console.log("inside function",a)
}

let a= 2
console.log("Before call ",a)
change(a)
console.log("After call ",a)
//run all codes

//now same code with Array with same name 
//we are not creating new array but basically assigning new name to array

function change1(arr)
{
    arr[0]=arr[0]+10
    console.log("inside function",arr)
}

let arr= [1,2,3,4,5]
console.log("Before call ",arr)
change1(arr)
console.log("After call ",arr)

//now same code with Array with different name 

function change1(brr)
{
    brr[0]=brr[0]+10
    console.log("inside function",brr)
}

let crr= [1,2,3,4,5]
console.log("Before call ",crr)
change1(arr)
console.log("After call ",crr)
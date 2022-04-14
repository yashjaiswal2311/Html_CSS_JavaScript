//delete element at index 5 and insert 55

arr=[10,20,30,40,50,60,70,80,90,100];
brr=[];
let i =0
while(i<5)
{
    x= arr.shift()
    brr.push(x)
    i++
}
arr.shift()
arr.unshift(55)

arr.unshift(...brr)

console.log(arr)

//or without using functions

//delete element at index 5 and insert 55

// arr=[10,20,30,40,50,60,70,80,90,100];

// for(i=arr.length-1;i>=5;i--)
// {
//  arr[i+1]=arr[i]   
// }
// arr[5]=55

// console.log(arr)
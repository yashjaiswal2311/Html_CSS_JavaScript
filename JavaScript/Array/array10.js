//take an array of size 10 and insert element at 5th index

let n=25
let arr=[1,2,3,4,5,6,7,8,9,10,11]
let brr=[]
let temp=0

l=arr.length
for(i=6;i<l;i++)
{
    temp=arr.shift()
    brr.unshift(temp)
}
arr.unshift(n)
console.log(arr)
console.log(brr)
l=brr.length
for(j=0;j<l;j++)
{
    x=brr.shift()
    arr.unshift(x)
}
console.log(arr)
console.log(brr)
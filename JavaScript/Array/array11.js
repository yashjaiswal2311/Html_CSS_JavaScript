//delete element at third index

arr=[10,20,30,40,50,60,70,80,90,100];
brr=[];

for(i=0;i<3;i++)
{
    x=arr.shift()
    brr.push(x)
}
arr.shift()
console.log(arr)
console.log(brr)

//with spread operator
    //arr.unshift(...brr)

//without spread operator

for(i=0;i<3;i++)
{
    x=brr.pop()
    arr.unshift(x)
}

console.log(arr)
console.log(brr)
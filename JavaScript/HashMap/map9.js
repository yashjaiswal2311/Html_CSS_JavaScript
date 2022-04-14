//make an array of size 10 assume a number n and check if it is present in it or not if present
//then print the index number otherwise -1

let arr=[10,20,30,40,50,60,70,80,90]
//without map
let n = 70
count=0
for(i=0;i<arr.length;i++)
{
    if(arr[i]==n)
    {
        count++
        console.log("index number of "+n+" is: "+i)
    }
}
if(count==0)
{
    console.log(-1)
}

//with map
let m = new Map()
let k =0
for(t of arr)
{
    m.set(t,k)
    k++
}
if(m.has(n))
{
    console.log(m.get(n))
}
else{
    console.log(-1)
}
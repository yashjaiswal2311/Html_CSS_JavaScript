arr=[10,20,30,40,50,60,70,80,90,100];

for(i=3;i<arr.length-1;i++)
{
 arr[i]=arr[i+1]   
}
arr.pop()

console.log(arr)
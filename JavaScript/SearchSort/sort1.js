arr=[10,22,90,30,70,47,35,6,78]

for(i=0;i<arr.length-1;i++)
{
    for(j=i+1;j<arr.length;j++)
    {
        if(arr[i]>arr[j])
        {
            temp=arr[j]
            arr[j]=arr[i]
            arr[i]=temp
            console.log(i,arr,j)
        }
    }
    //console.log(arr)
}
console.log("Sorted Array: ",arr)
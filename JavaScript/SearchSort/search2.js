let arr1=[10,20,30,40,50,60,70,80,90]
let arr2=[2,4,5,6,8,19,27,36,45]
arr3=[]
let i=0,j=0

while(i<arr1.length && j<arr2.length)
{
    if(arr1[i]>arr2[j])
    {
        arr3.push(arr2[j])
        j++
    }
    else if(arr1[i]<arr2[j])
    {
        arr3.push(arr1[i])
        i++
    }
    else if(arr1[i]==arr2[j])
    {
        arr3.push(arr1[i])
        arr3.push(arr2[j])
        j++
        i++
    }
}
while(i<arr1.length)
{
    arr3.push(arr1[i])
    i++
}
while(j<arr2.length)
{
    arr3.push(arr2[j])
    j++
}
console.log(arr3)
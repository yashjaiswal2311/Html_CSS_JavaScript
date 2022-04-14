//like we have seen if we are passing array as a argument and while calling if we are assigning
//it another array so both will use same adddress and changes made on any of them will reflect on
//both so we dont need to return array or non primitive datatypes
//find the square of array elements
function change(arr)
{
    i=0
    while(i<arr.length)
    {
        arr[i]=arr[i]**2
        i++
    }
    console.log(arr)
    //return arr (totally ignoreable)
}

brr=[2,4,6,8,10]
change(brr)
console.log(brr)

arr=[10,20,30,40,50,60,70,80]

let x=20
beg=0
end=7

while(beg<end)
{
    mid = parseInt((beg+end)/2)

    if(x==arr[mid])
    {
        console.log("Element found at",mid)
        break;
    }
    else if(x>arr[mid])
    {
        beg= mid+1
    }
    else if(x<arr[mid])
    {
        beg= mid-1
    }
}
if(beg>end)
{
    console.log("Element not found");
}

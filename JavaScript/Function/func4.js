//prime number if prime find sum of its digits

function prime(num)
{
    if(num==1)
    {
        return sumOfDigit(num);
    }
    for(i=2;i<num;i++)
    {
        if(num%i==0)
        {
            return "Not Prime";
        }
    }
    return sumOfDigit(num);
}
function sumOfDigit(x)
{
    let sum=0
    sum=x%10
    sum=sum+parseInt(x/10)
    console.log("Number is "+x)
    return sum;
}

for(let j=1;j<=20;j++)
{
    console.log(prime(j));
}
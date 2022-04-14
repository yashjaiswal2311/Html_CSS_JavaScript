//prime number
function prime(num)
{
    if(num==1)
    {
        return "Prime";
    }
    for(i=2;i<num;i++)
    {
        if(num%i==0)
        {
            return "Not Prime";
        }
    }
    return "Prime";
}
for(let j=1;j<=10;j++)
{
    console.log(prime(j));
}
//taking multiple values in parameter
//using spread operator

function add(...a)
{
    sum=0
    for(t of a)
    {
        sum=sum+t
    }
    console.log(a)
    console.log(sum)
}
add(10,20,30,40,50,60)

//if two parameter then always write (... spread operator) in the last

function add1(b,...a)
{
    console.log(a)
    console.log(b)
}
add1(10,20,30,40,50,60)
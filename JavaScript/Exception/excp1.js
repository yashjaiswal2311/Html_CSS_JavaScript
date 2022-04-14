//let a=10

try{
    console.log("Before Error")
    console.log(a)
}

catch(e)
{
    //console.log("My Error")
    console.log(e.name)
    console.log(e.message)
    console.log(e.stack)
}

finally
{
console.log("Exception Handling")
}
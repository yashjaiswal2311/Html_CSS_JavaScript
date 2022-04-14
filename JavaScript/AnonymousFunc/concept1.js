//passing normal function as parameter

// function one(a)
// {
//     console.log("First Function")
//     a();
// }
// function two()
// {
//     console.log("Second Function")
// }

// one(two);

//passing no name function as a parameter is called callback

// function one(a)
// {
//     console.log("First Function")
//     a();
// }
// let two=()=>{console.log("Second Function")}

// one(two);

//or

// function one(a)
// {
//     console.log("First Function")
//     a();
// }

// one(function () {console.log("Second Function")});

// one(()=>console.log("Second Function"));

//or

function one(a)
{
    console.log("First Function")
    a();
}

one(()=>console.log("Second Function"))
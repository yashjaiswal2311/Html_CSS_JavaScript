//
// let display=(a,b)=>
// {
//     add =a+b;
//     sub=a-b;
    
//     return [add,sub]      //properly work
//     //return add,sub;        //will only return the second one
//     //return (add,sub)        //will only return the second one

// }
// console.log(display(10,5));

// //or
// let display=(a,b)=>
// {
//     add =a+b;
//     sub=a-b;
    
//     return [add,sub]      //properly work
//     //return add,sub;        //will only return the second one
//     //return (add,sub)        //will only return the second one

// }
// console.log(display(10,5));

//or

let display=(a,b)=>([a+b,a-b])

console.log(display(10,5));
//Synchronous coding where processes are dependant on each other

// console.log("a")
// console.log("b")

// for(i=0;i<100000000;i++)
// {

// }
// console.log("c")
// console.log("Synchronous Coding")
//Asynchronous coding where processes are Independant

console.log("a")

setTimeout(()=>console.log("b"),5000)
console.log("c")

console.log("Asynchronous Coding")
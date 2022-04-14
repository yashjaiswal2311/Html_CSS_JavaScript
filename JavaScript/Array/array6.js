//Taking input via STDIN

const readline = require("readline");

const code = readline.createInterface({
    input: process.stdin
});

const userInput= [];
code.on("line",(data) =>{
    userInput.push(data);
    });

code.on("close",() => {
    let input=userInput
    //write your code after this
    let a,b
    a=parseInt(input[0])
    b=parseInt(input[1])
    sum=a+b
    console.log(sum)
});
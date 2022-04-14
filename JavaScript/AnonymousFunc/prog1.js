//Anonymous Function as normal function will always be in () if not storing it in a variable

(function()
{
  console.log("No name Function");  
})();               //print it pass () just after the function ) ends

// 

let x = function()
{
  console.log("No name Function");  
}

x();

//No name function as Arriw function
let a= ()=>console.log("No name Function as Arrow");

a();
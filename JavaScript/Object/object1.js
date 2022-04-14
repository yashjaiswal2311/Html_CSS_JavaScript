//object syntax
//primitive datatype
//let person="Yash"

//object (combination of 'name:value')

let person={
    name:"Yash",
    lastName:"Jaiswal",
    "age":25,Country:"India",
    91:993546
};

console.log(person)         //access everything
console.log(person.age)     //access particular key
//to access a constant

//console.log(person.91)      //error
console.log(person["91"]);
console.log(person[91]);
console.log(person[name]);
console.log(person["name"]);

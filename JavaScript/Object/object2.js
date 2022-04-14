//object (combination of 'name:value')

let person={
    name:"Yash",
    "mid name":"Ajay",
    lastName:"Jaiswal",
    "age":25,Country:"India",
    91:993546
};

let t="height"
person[t]="5'11"
person["t"]="5'11"
//person["t"]="height"
person["height"]="5'11"

console.log(person.t)   //no output

console.log(person[t])

console.log(person)
//loops in object

let person={
    name:"Yash",
    "mid name":"Ajay",
    lastName:"Jaiswal",
    "age":25,Country:"India",
    91:993546
};

for(t in person)
{
    console.log(t,person[t])
}

for(t of person)
{
    console.log(t )
}
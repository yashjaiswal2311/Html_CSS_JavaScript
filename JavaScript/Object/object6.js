//create array of objects {name,age} and print only those name who are atleast 18 years old

let arr = [{name:"Yash",age:25},{name:"Harsh",age:27},{name:"Neel",age:26},{name:"Hemu",age:18},
    {name:"Nande",age:21},{name:"Nandu",age:26},{name:"Aggi",age:16}]

for(t of arr)
{
    if(t.age >= 18)
    {
        console.log(t.name,t.age)
    }
}
let x= arr[0]
console.log(x.name,x.age)

for(i=0;i<arr.length;i++)
{  if(arr[i].age<18)
    {
        console.log(arr[i].name,arr[i].age)
    }
}
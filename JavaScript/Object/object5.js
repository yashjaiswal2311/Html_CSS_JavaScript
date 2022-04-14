//take two objects and return new object with properties of both

//solution1
// function merge(obj1,obj2)
// {
//     let obj3={...obj1,...obj2}
//     return obj3
// }

// console.log(merge({name:"Yash",age:25},{name:"Yash",country:"India"}))

//solution2

function merge(obj1,obj2)
{
    let obj3={}
    for(t in obj1)
    {
        obj3[t]=obj1[t]
    }
    for(n in obj2)
    {
        obj3[n]=obj2[n]
    }
    return obj3
}

console.log(merge({name:"Yash",age:25},{name:"Yash",country:"India"}))
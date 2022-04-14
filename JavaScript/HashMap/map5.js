let m = new Map()
console.log(m)

m.set(0,10);
m.set(1,20);
m.set(2,30);
m.set("four",50)

for(t of m)
{
    console.log(t)
}
// loop will print map in the form of array so it will print all the keys of map 
// on index 0 and values on index 1 so if you print it will print key t[0] and t[1] value.
// we can get keys ans values by different approach as well

for(let t of m.keys())
{
    console.log(t)
}

for(let t of m.values())
{
    console.log(t)
}
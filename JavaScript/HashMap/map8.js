arr=[10,20,10,10,30,30,20,40,40,20,50]

let m = new Map()
c=0

for(t of arr)
{
    if(m.has(t))
    {
        c=m.get(t)
        m.set(t,c+1)
    }
    else
    {
        m.set(t,1)
    }
}
console.log(m)
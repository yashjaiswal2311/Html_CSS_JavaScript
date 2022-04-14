//take an array & remove duplicate character

arr=[10,20,10,10,30,30,20,40,40,20]
brr=[]

let m = new Map()
for(t of arr)
{
    m.set(t,1)
}
console.log(m)

k=0
for(t of m)
{
    brr[k]=t[0]
    k++
}
console.log(brr)
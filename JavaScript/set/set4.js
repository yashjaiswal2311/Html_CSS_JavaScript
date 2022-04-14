//take a string and print only unique character

str="hhheeeeellllooooottt";

let set = new Set(str)

console.log(set)
console.log(set.size)
console.log(set.has("h"))

set.delete("t")
console.log(set)


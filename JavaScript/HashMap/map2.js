//creating map by adding values using set() method

const fruits = new Map()

fruits.set("apple",100);
fruits.set("banana",200);
fruits.set("mango",300);


console.log(fruits)

fruits.set("apple",150);
console.log(fruits)
console.log(fruits.size);
fruits.delete("apple");
// fruits.clear();
console.log(fruits.has("banana"));

console.log(fruits)
//split() & join()

str="hey! how are you?";
arr=str.split(" ");
console.log(arr);
arr=str.split("!");
console.log(arr);
arr=str.split("");
console.log(arr);
arr=str.split();
//brcause it returns an array so we are using array to hold the values
console.log(arr);

console.log(arr.join(""));
console.log(arr.join(" "));
console.log(arr.join(","));
console.log(arr.join());
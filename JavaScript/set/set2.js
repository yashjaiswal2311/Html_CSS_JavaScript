let s = new Set(["a", "b", "c"]);
s.add("d");

const set = new Set();
s.add("a",1);
s.add("b");
s.add("c");
s.add("d");
s.add("a")
console.log(s);
for(t of s)
{
    console.log(t);
}
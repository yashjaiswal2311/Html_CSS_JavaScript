let players = new Map([
    ["Ronaldo",100],
    ["Messi",100],
    ["Neymar",90],
    ["Mbappe",92]
])
players.delete("Neymar")
for(names of players)
{
    console.log(names)
    if(players.has("Ronaldo"))
    {
        console.log("Yes!")
    }
    else{
        console.log("No!")
    }
}

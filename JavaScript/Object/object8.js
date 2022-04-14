let clothes ={
    name:["shirt","t-shirt","jeans","jacket","sweat-shirt","sweater"],
    color:["red","blue","green","yellow","black"]
}

function colorOption(dress)
{
    let i=0
    for(t of clothes.name)
    {
        if(t==dress)
        {
            console.log(clothes.color[parseInt(Math.random()*4)])
        }
        i++
    }
}

colorOption("jeans")
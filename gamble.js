//simple game for console
var currPoints = 500
var bet = 100 //users bet
var userStr = "black";

/////////////////
var choice = userStr.toLowerCase()
let reCol = /black|green|red/;
var colors = ["black","red","green"]
var nroColor = ("")
peliInfo =  " Format : bet color  \n Color % :\n Green 1/37 = 2.7% \n Red 18/37 = %48.6 \n Black 18/37 = %48.6"
console.log(peliInfo)

console.log("\n Your bet: "+ bet+", "+" Color: "+userStr)
if (reCol.test(choice)== true)
  {
        var nro = Math.floor(Math.random() * 36);
        var nonOdd = (nro) => {return nro % 2 == 0}
        if (nro == 0){nroColor = colors[2]}
        else {
        if (nonOdd(nro)==true) {nroColor = colors[0]} //black
        if (nonOdd(nro)==false) {nroColor = colors[1]} //red
        }
        function win ()
        {
            var mult = 0;
                if (choice == nroColor )
                  {
                    switch (nroColor)
                      {
                        case "black" : mult = 2; break;
                        case "red" : mult = 2; break;
                        case "green" : mult = 10; break;
                      }
                     currPoints+=bet * mult
                     teksti = "You won!  Points now:"
                    return (teksti, currPoints)
                  }
                else {return ("You lost...  Points now:",currPoints - bet)}
        }
        console.log("And the number is", nro,nroColor)
        console.log(win())
  }
  else if(reCol.test(choice)== false)
  {
    console.log("Wrong format")
  }  

//dice 1
var randomnumber1 = Math.floor(Math.random()*6) +1 ; 
var diceimage = "images/dice" + randomnumber1 + ".png" ; 
var finalimg = document.querySelectorAll("img")[0]; 
finalimg.setAttribute("src",diceimage); 
//dice 2
var randomnumber2 = Math.floor(Math.random()*6) +1 ; 
var diceimage2 = "images/dice" + randomnumber2 + ".png" ; 
var finalimg2 = document.querySelectorAll("img")[1]; 
finalimg2.setAttribute("src",diceimage2); 

if(randomnumber1>randomnumber2) {
    document.querySelector("h1").innerHTML="Player 1 wins" ; 
} 
else if (randomnumber2>randomnumber1) { 
    document.querySelector("h1").innerHTML="Player 2 wins" ;
} 
else { 
    document.querySelector("h1").innerHTML="DRAW" ;
}
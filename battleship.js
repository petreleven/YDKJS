var location1 = 3;
var location2 = 4;
var location3 = 5;

var guesses = 0;
var hits = 0;
var singleguess=0;

var isSunk = false;

while(!isSunk){
    singleguess = prompt("Enter ship cordinate(0-6");
    if (singleguess<0 || singleguess>6){
        alert("Enter valid cordinates");
        continue;
    }
    else{
        guesses +=1;
        if (singleguess == location1 || singleguess==location2 || singleguess==location3){
            hits+=1;
        }
    }
    if (hits==3){
        isSunk = true;
    }
}
alert("Mission complete soldier "+ "TOOK:"+ guesses +" guesses");
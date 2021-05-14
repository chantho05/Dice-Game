var randomNumber = Math.floor(Math.random() * 6) + 1; // 1 - 6
    
var randomDiceImage = "dice" + randomNumber + ".png"; // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //folder for images

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//if player wins

if (randomNumber > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";   
}
else if (randomNumber2 > randomNumber) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
else {
    document.querySelector("h1").innerHTML = "DRAW!"
}
var wrongGuess = [];
var letterGuess = [];
var wins = 0;
var losses = 0;
var currentLetter = "";
var guessLeft = 10

//random generator//
var ranNumber = 0;

var choices = 'abcdefghijklmnopqrstuvwxyz'.split('');


var html =
    "<p>Wins - + wins + </p> " +
    "<p>Losses - + losses + </p>" +
    "<p>Guesses Left - " + guessLeft + " </p>" +
    "<p>Guess So Far - " + guessLeft + "</p>";

//F(x)//

var currentLetter = ranNumber = Math.floor(Math.random() * choices.length) - 1
currentLetter = choices[ranNumber]
console.log(currentLetter);
document.onkeydown = function (event) {
    console.log(event.key);

    var userGuess = event.key; {
        if (userGuess == currentLetter)
            wins++;
        guessLeft = 10;
    }
    if (userGuess != currentLetter) {
        losses++;
        guessLeft--;
    }
    if (guessLeft === 0) {
        guessLeft = 10;
        losses++;
        letterGuess = [];
    }
}




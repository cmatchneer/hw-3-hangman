var theList = ["the", "jumbo", "javascript", "html", "css", "gravity", "codeing", "bug", "debugging"];
var numberOfGuesses = 15;
var computerGuess = theList[Math.floor(Math.random() * theList.length)];
var theLetters = [];
var theWin = computerGuess.length;
console.log(computerGuess);


for (var j = 0; j < computerGuess.length; j++) {
    theLetters[j] = " _ ";
}
$("#theWord").text(theLetters);



function theGame(guess) {
    numberOfGuesses -= 1;

    $("#guessesLeft").text("Guesses Left: " + numberOfGuesses);
    $("#playerGuess").append(guess);
    $("#hitOrMiss").text("Uh oh " + guess + " isnt in the word keep going");
    $("#endGame").empty();
    for (var i = 0; i < computerGuess.length; i++) {
        if (guess.toLowerCase() === computerGuess.charAt(i)) {
            theLetters[i] = guess;
            console.log(theLetters[i]);
            theWin -= 1;
            $("#theWord").text(theLetters.join(""));
            $("#hitOrMiss").text("You got a letter only " + theWin + " to go");

        }

    }
    if (theWin === 0) {
        numberOfGuesses = 15;
        computerGuess = theList[Math.floor(Math.random() * theList.length)];
        theWin = computerGuess.length;
        theLetters = [];
        console.log(theWin);
        console.log(computerGuess);
        $("#endGame").text("YOU ARE THE CHAMPION OF THE WORLD!!!!!");
        $("#theWord").empty();
        $("#playerGuess").empty();
        $("#hitOrMiss").empty();
        $("#guessesLeft").text("Guesses Left: " + numberOfGuesses);
        for (var k = 0; k < computerGuess.length; k++) {
            theLetters[k] = " _ ";
        }

    }
    if (numberOfGuesses === 0) {
        numberOfGuesses = 15;
        computerGuess = theList[Math.floor(Math.random() * theList.length)];
        theWin = computerGuess.length;
        theLetters = [];
        $("#endGame").text("LOOOOOOOSEEEEEERRRRR!!!!!");
        $("#theWord").empty();
        $("#playerGuess").empty();
        $("#hitOrMiss").empty();
        $("#guessesLeft").text("Guesses Left: " + numberOfGuesses);
        console.log(theWin);
        console.log(numberOfGuesses);
        console.log(computerGuess);
        for (var l = 0; l < computerGuess.length; l++) {
            theLetters[l] = " _ ";
        }


    }

}
document.onkeypress = function(event) {
    var userGuess = event.key;
    theGame(userGuess);
}
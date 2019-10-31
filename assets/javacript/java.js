$(document).ready(function() {
    //base vars to build the game
    var theList = ["the", "jumbo", "javascript", "html", "css", "gravity", "codeing", "bug", "debugging"];
    var numberOfGuesses = 15;
    var computerGuess = theList[Math.floor(Math.random() * theList.length)];
    var theLetters = [];
    var theWin = computerGuess.length;
    console.log(computerGuess);

    // making the array the same length as the guess and blank so it can be filled in later
    for (var j = 0; j < computerGuess.length; j++) {
        theLetters[j] = " _ ";
    }

    //puts the empty array on the screen
    $("#theWord").text(theLetters.join(""));

    //reset button
    $("#reset").on("click", function() {
        // console.log(computerGuess);
        $("#endGame").html("Looks like we have quitter over here" + "<br>" + "The word was " + computerGuess + "<br>" +
            "Hit another letter to try again dont quite this time");
        numberOfGuesses = 15;
        computerGuess = theList[Math.floor(Math.random() * theList.length)];
        theWin = computerGuess.length;
        theLetters = []
        $("#theWord").empty();
        $("#playerGuess").empty();
        $("#playerGuess").text("Your Guesses: ");
        $("#hitOrMiss").empty();
        $("#guessesLeft").text("Guesses Left: " + numberOfGuesses);

        for (var r = 0; r < computerGuess.length; r++) {
            theLetters[r] = " _ ";
        }
        $("#theWord").text(theLetters.join(""));
    })

    function theGame(guess) {
        //all the stuff that should happen hit or miss
        numberOfGuesses -= 1;
        $("#guessesLeft").text("Guesses Left: " + numberOfGuesses);
        $("#playerGuess").append(guess);
        $("#hitOrMiss").text("Uh oh " + guess + " isnt in the word keep going");
        $("#endGame").empty();


        //the loop and if statment for gussing a letter correctly
        for (var i = 0; i < computerGuess.length; i++) {
            if (guess.toLowerCase() === computerGuess.charAt(i)) {
                theLetters[i] = guess;
                console.log(theLetters[i]);
                theWin -= 1;
                $("#theWord").text(theLetters.join(""));
                $("#hitOrMiss").text("You got a letter only " + theWin + " to go");

            }

        }
        //winning the game
        if (theWin === 0) {
            numberOfGuesses = 15;
            computerGuess = theList[Math.floor(Math.random() * theList.length)];
            theWin = computerGuess.length;
            theLetters = [];
            $("#endGame").html("YOU ARE THE CHAMPION OF THE WORLD!!!!!" + "<br>" + "hit another letter to play again");
            $("#theWord").empty();
            $("#playerGuess").empty();
            $("#playerGuess").text("Your Guesses: ");
            $("#hitOrMiss").empty();
            $("#guessesLeft").text("Guesses Left: " + numberOfGuesses);
            for (var k = 0; k < computerGuess.length; k++) {
                theLetters[k] = " _ ";
            }
            $("#theWord").text(theLetters.join(""));

        }
        //losing the game
        if (numberOfGuesses === 0) {
            numberOfGuesses = 15;
            computerGuess = theList[Math.floor(Math.random() * theList.length)];
            theWin = computerGuess.length;
            theLetters = [];
            $("#endGame").html("LOOOOOOOSSSSSSEEEEEERRRRR!!!!!" + "<br>" + "hit another letter to play again");
            $("#theWord").empty();
            $("#playerGuess").empty();
            $("#playerGuess").text("Your Guesses: ");
            $("#hitOrMiss").empty();
            $("#guessesLeft").text("Guesses Left: " + numberOfGuesses);
            console.log(theWin);
            console.log(numberOfGuesses);
            console.log(computerGuess);
            for (var l = 0; l < computerGuess.length; l++) {
                theLetters[l] = " _ ";
            }
            $("#theWord").text(theLetters.join(""));
        }

    }
    //starting the game
    document.onkeypress = function(event) {
        var userGuess = event.key;
        theGame(userGuess);
    }
});
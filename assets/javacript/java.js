$(document).ready(function() {
    const theList = [{ word: "the", tip: "You use this word everyday starts with t" },
        { word: "jumbo", tip: "Some shrimps are called this" },
        { word: "javascript", tip: "Used to make a web page dyanmic" },
        { word: "html", tip: "Basics of makeing a website" },
        { word: "css", tip: "Makes webpages look goooooooood" },
        { word: "gravity", tip: "What keeps us from being able to fly" },
        { word: "codeing", tip: "Another name for programming" },
        { word: "bugs", tip: "The one thing coders and all homeowners hate to see" },
        { word: "debugging", tip: "What coders spend 90% of their lives doing" }
    ];
    let index = Math.floor(Math.random() * theList.length);
    let numberOfGuesses;
    let computerGuess = theList[index].word;
    let theTip = theList[index].tip;
    let theLetters = [];
    let wins = 0;
    let losses = 0;
    let gameOver = false;
    let gameStart = false;
    const sound = document.createElement('audio');

    console.log(computerGuess);
    var easyBtn = $("<button>");
    easyBtn.addClass("easyButton btn btn-danger");
    easyBtn.text("easy mode");
    $("#theWord").append(easyBtn);
    $(".easyButton").on("click", function() {
        $("#theWord").empty();
        numberOfGuesses = 15;
        gameStart = true;
        setUp();
    });

    const setUp = () => {
        // making the array the same length as the guess and blank so it can be filled in later
        for (var j = 0; j < computerGuess.length; j++) {
            theLetters[j] = " _ ";
        }

        //puts the empty array on the screen
        $("#theWord").text(theLetters.join(""));
    }

    //reset button
    $("#reset").on("click", function() {
            losses += 1
            $("#lossTotal").text("Your Total Losses: " + losses);
            $("#endGame").html("Looks like we have quitter over here" + "<br>" + "The word was " + computerGuess + "<br>" +
                "Hit another letter to try again dont quit this time");
            reset();
        })
        //tip button
    $("#helpDesk").on("click", function() {

            $("#theTip").html("Welcome to the help desk here is your tip: " + theTip + "<br>" +
                "I hope this helps good luck");
            $("#endGame").empty();
            sound.setAttribute("src", "assets/audio/help.m4a");
            sound.play();



        })
        //the game
    const theGame = (guess) => {
        if (gameStart) {
            //all the stuff that should happen hit or miss
            numberOfGuesses -= 1;
            $("#guessesLeft").text("Guesses Left: " + numberOfGuesses);
            $("#playerGuess").append(" " + guess + " ");
            $("#hitOrMiss").text("Uh oh " + guess + " isnt in the word keep going");
            $("#endGame").empty();
            sound.setAttribute("src", "assets/audio/miss.m4a");
            sound.play();
            //the loop and if statment for gussing a letter correctly
            for (var i = 0; i < computerGuess.length; i++) {
                if (guess.toLowerCase() === computerGuess.charAt(i)) {
                    theLetters[i] = guess;
                    $("#theWord").text(theLetters.join(""));
                    $("#hitOrMiss").text("You guessed a correct letter yayy keep going");
                    sound.setAttribute("src", "assets/audio/hit.m4a");
                    sound.play();

                }
            }


            //winning the game
            if (theLetters.join("") === computerGuess) {
                gameOver = true;
                wins += 1;
                $("#endGame").html("YOU ARE THE CHAMPION OF THE WORLD!!!!!" + "<br>" + "Press the win button to play again");
                $("#winTotal").text("Your Total Wins: " + wins);
                sound.setAttribute("src", "assets/audio/champion.m4a");
                sound.play();

                //creating win button 
                var winBtn = $("<button>");
                winBtn.addClass("winButton btn btn-primary")
                winBtn.text("You Win");
                $("#buttons").append(winBtn);
                $(".winButton").on("click", function() {
                    $(this).remove();
                    reset();
                });
            }
            //losing the game
            if (numberOfGuesses === 0 && theLetters.join("") !== computerGuess) {
                gameOver = true;
                losses += 1;
                $("#lossTotal").text("Your Total Losses: " + losses);
                $("#endGame").html("LOOOOOOOSSSSSSEEEEEERRRRR!!!!!" + "<br>" + "The word you were tring to guess was " + computerGuess + "<br>" +
                    " Press the lose button to play again");
                sound.setAttribute("src", "assets/audio/loser.m4a");
                sound.play();

                //lose game button creation
                var loseBtn = $("<button>");
                loseBtn.addClass("loseButton btn btn-danger");
                loseBtn.text("You Lose");
                $("#buttons").append(loseBtn);
                $(".loseButton").on("click", function() {
                    $(this).remove();
                    reset();
                });

            }
        }

    }

    const reset = () => {
        index = Math.floor(Math.random() * theList.length);
        gameOver = false;
        numberOfGuesses = 15;
        computerGuess = theList[index].word;
        theTip = theList[index].tip;
        theLetters = [];
        $("#theTip").empty();
        $("#endGame").empty();
        $("#theWord").empty();
        $("#playerGuess").empty();
        $("#playerGuess").text("Your Guesses: ");
        $("#theTip").text("Help Desk");
        $("#hitOrMiss").empty();
        $("#guessesLeft").text("Guesses Left: " + numberOfGuesses);
        for (var k = 0; k < computerGuess.length; k++) {
            theLetters[k] = " _ ";
        }
        $("#theWord").text(theLetters.join(""));
    }

    //starting the game
    document.onkeypress = function(event) {
        var userGuess = event.key;
        //stops game win or lose
        if (gameOver === true) {
            return;
        }
        //makes sure only letters can be used to play the game
        if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)) {
            theGame(userGuess);
        }
    }

});
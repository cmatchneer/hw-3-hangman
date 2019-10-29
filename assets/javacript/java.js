var theList = ["the", "jumbo", "javascript", "html", "css", "gravity", "codeing", "bug", "debugging"];
var numberOfGuesses = 5;
var computerGuess = theList[Math.floor(Math.random() * theList.length)];
var theLetters = [];
console.log(computerGuess);
for (var j = 0; j < computerGuess.length; j++) {
    theLetters[j] = "_";
}
$("#theWord").append(theLetters);


function theGame(guess) {
    var corretGuess = "you guessed the correct letter yayy!!"
    var wrongGuess = "you missed a letter uh-oh!!";


    for (var i = 0; i < computerGuess.length; i++) {

        if (guess === computerGuess.charAt(i)) {
            theLetters[i] = guess;
            $("#theWord").append(theLetters);
            $("#playerGuess").append(guess);
            // console.log(i)




        } else {
            $("#playerGuess").append(guess);
            console.log(numberOfGuesses -= 1);

        }
    }

}

document.onkeypress = function(event) {
    var userGuess = event.key;
    theGame(userGuess);
}
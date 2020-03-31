var errorCountElement = document.getElementById("error-count");
var winCountElement = document.getElementById("win-count");
var lossCountElement = document.getElementById("loss-count");
var yourWordElement = document.getElementById("your-word");
var yourGuessesElement = document.getElementById("your-guesses");
var wins = 0;
var losses = 0;

 const init = function ()
 {
    this.lives = 12; 
    this.gameOver = false;

    this.validGuesses = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

    this.guessArray = [];

    this.gameWords = ["bowling", "strike",
    "spare","split","approach","arrows","curve",
    "washout","lanes","average","frame","approach",
    "pins","turkey"];
        
    this.word = this.gameWords[Math.floor(Math.random() * gameWords.length)];

    this.answerArray = [];
    for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_"; }

    this.remainingLetters = word.length;

    this.correctLetters = [];
    for (var i = 0; i < word.length; i++) {
		this.correctLetters[i] = 'false';
	}

    document.addEventListener('keyup', inputKey);

    pageUpdate();
}

const inputKey = function(event)
{

const key = event.key;
var isInWord = false;
//check if valid guess
for(var i=0;i<validGuesses.length;i++)
{
    if(key === validGuesses[i])
    {
        //check if guess is in word
        for (var j = 0; j < word.length; j++) 
        {
            if (word.charAt(j) === key) {
                isInWord = true;
                answerArray[j] = key;
            }
        }
            //if not in word
            if (isInWord == false) {
                lives--;
            }

        //manage guessArray
        guessArray.push(key + " ");

        //losing conditions
        if (lives < 1) {
            losses++;
            gameOver = true;
        }
        //winning conditions
        if (answerArray.join("") === word) {
            wins++;
            gameOver = true;
        }
        
        //manage valid guess - take out that letter
        validGuesses = validGuesses.filter(e => e !== key); 
    }
    else{
        //if not valid guess
        continue;
    }

}
if(gameOver == true){
    init();
}
pageUpdate();

}

const pageUpdate = function(){

    tempString = "";
	for (var i = 0; i < this.answerArray.length; i++) {
		tempString += (this.answerArray[i].toUpperCase());
	}
    yourWordElement.textContent = tempString;
    
    tempString = "";
	for (var i = 0; i < this.guessArray.length; i++) {
		tempString += (this.guessArray[i].toUpperCase());
	}
    yourGuessesElement.textContent = tempString;

    tempString = this.lives;
	for (var i = tempString.length; i < 32; i++) {
        tempString += " ";
	}
    errorCountElement.textContent = tempString;

    tempString = this.wins + "";
	for (var i = tempString.length; i < 45; i++) {
		tempString += " ";
	}
	winCountElement.textContent = tempString;
    
    
    tempString = this.losses + "";
	for (var i = tempString.length; i < 43; i++) {
		tempString += " ";
	}
    lossCountElement.textContent = tempString

}

init(); 

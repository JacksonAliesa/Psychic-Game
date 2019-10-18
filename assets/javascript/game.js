//1 get user input
// 1 How to get user input?

//2 Get the letter that was chosen

//3 Record if it was a win or loss - how many # of times they guessed correctly or incorrectly

//4 Record how many guesses they have left after each attempt

//5 Record what letters were guessed - specific letters typed by user- display until game over

//6 when the player wins increase the wins counter

//7 when player loses increase the loser counter

//8 restart game after win or loss without page refresh

var wins = 0;
var losses = 0;
var guess = 10;

// variables to pull elements from the html file
var totalWins = document.getElementById('totalWins');
var totalLosses = document.getElementById('totalLosses');
var guessLeft = document.getElementById('guessLeft');
var guessTracker = document.getElementById('guessTracker');
// this function is ran whenever user presses a key
document.onkeyup = function(event) {
	// variable created determines what key is pressed
	var userGuess = event.key;
	
	var letterChoices = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z'
	];

	var compGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];
	

	if (userGuess === compGuess) {
		wins++;
	} 
	if (wins > 5){
		totalWins.reset();
	}
	else {
		losses++; 
		guess--; 
		if (losses > 10) {
			totalLosses.reset();
		}
		if (guess === 0){
          guessLeft.reset();
		} 
		// if (wins || losses || guess){

		// }

		// I started with the right idea of controlling the amount of wins, losses, 
		//guesses the user should have. I am wondering my syntax or use of the reset
		//method is valid
	
    }
    

	totalWins.textContent = 'Wins: ' + wins;
    totalLosses.textContent = 'Losses: ' + losses;
    guessTracker.textContent = "Your Guesses So Far:" + userGuess;
    guessLeft.textContent = "Guesses Left:" + guess;
	


  
    
};

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
var guess = 9;
var guessArr = [];

// variables to pull elements from the html file
var totalWins = document.getElementById('totalWins');
var totalLosses = document.getElementById('totalLosses');
var guessLeft = document.getElementById('guessLeft');
var guessTracker = document.getElementById('guessTracker');

totalWins.textContent = 'Wins: ' + wins;
totalLosses.textContent = 'Losses: ' + losses;
guessLeft.textContent = 'Guesses Left:' + guess;

// this function is ran whenever user presses a key
document.onkeyup = function(event) {
	// variable created determines what key is pressed
	var userGuess = event.key;

	// variables that we want to appear on web browser from the html file
	//this will display

	guessTracker.textContent = 'Your Guesses So Far:' + userGuess;

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

	// got to reset the game when the guesses run out for user
	// attempted to use the push method but it was unsuccessful thus far
	if (userGuess !== compGuess) {
		guess--;
		losses++;
		if (guess == 0) {
			guess = 9;
			losses = 0;
			wins = 0;
		}
	} else if (userGuess === compGuess) {
		wins++;
		guess--;

		if (guess == 0) {
			guess = 9;
			losses = 0;
			wins = 0;
		}
	}

	// variables that we want to appear on web browser from the html file
	//this will display
	totalWins.textContent = 'Wins: ' + wins;
	totalLosses.textContent = 'Losses: ' + losses;
	guessLeft.textContent = 'Guesses Left:' + guess;
	guessTracker.textContent = 'Your Guesses So Far:' + userGuess;

	console.log(guessArr.join(userGuess));
};

////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (move == "rock") {
    	return "rock";
    } else if (move == "paper") {
    	return "paper";
    } else if (move == "scissors") {
    	return "scissors";
    } else {
    	move = getInput();
    }
    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move == "rock") {
    	return "rock";
    } else if (move == "paper") {
    	return "paper";
    } else if (move == "scissors") {
    	return "scissors";
    } else {
    	move = randomPlay();
    }
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove == computerMove) {
    	winner = "tie";
    } else if (playerMove == "rock") {
    	if (computerMove == "scissors") {
    		winner = "player";
    	} else {
    		winner = "computer";
    	}
    } else if (playerMove == "paper") {
    	if (computerMove == "rock") {
    		winner = "player";
    	} else if (computerMove == "scissors") {
    		winner = "computer";
    	}
    } else if (playerMove == "scissors") {
    	if (computerMove == "rock") {
    		winner = "computer";
    	} else if (computerMove == "paper") {
    		winner = "player";
    	}
    } else {
        winner = "none";
    }
    return winner;
}



function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var gameLimit = 5;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins < gameLimit && computerWins < gameLimit) {
    	var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
    	var newWinner = getWinner(playerMove,computerMove);
    	if (newWinner == "player"){
    		printMove(playerMove, computerMove);
    		playerWins += 1;
    		console.log("Current Score: " + (playerWins) + "to " + computerWins + "\n");
    	} else if (newWinner == "computer"){
    		printMove(playerMove, computerMove);
    		computerWins += 1;
    		console.log("Current Score: " + (playerWins) + "to " + computerWins + "\n");
    	} else {
    		printTie(playerMove, computerMove);
    		console.log("Current Score: " + (playerWins) + "to " + computerWins + "\n");
    	}
    }
    return "Final Score is : " + " " + playerWins + " to " + computerWins;
}

function printMove(playerMove, computerMove) {
	console.log("Player chose " + playerMove + " while Computer chose " + computerMove);

}

function printTie(playerMove, computerMove) {
	console.log("Player chose " + playerMove + " while Computer chose " + computerMove + "." + " It's a tie!");
}

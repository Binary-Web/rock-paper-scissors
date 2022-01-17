function playRound(playerSelection, computerSelection) {
    // your code here!
    if(playerSelection.toLowerCase() == "rock") {
        if(computerSelection == "rock") {
            return Jugde(playerSelection, computerSelection, "tie")
        } else if (computerSelection == "paper") { 
            return Jugde(playerSelection, computerSelection, "lose")
        } else if (computerSelection == "scissors") {
            return Jugde(playerSelection, computerSelection, "win")
        }
    } else if(playerSelection.toLowerCase() == "scissors") {
        if(computerSelection == "rock") {
            return Jugde(playerSelection, computerSelection, "lose")
        } else if (computerSelection == "paper") { 
            return Jugde(playerSelection, computerSelection, "win")
        } else if (computerSelection == "scissors") {
            return Jugde(playerSelection, computerSelection, "tie")
        }
    } else if(playerSelection.toLowerCase() == "paper") {
        if(computerSelection == "rock") {
            return Jugde(playerSelection, computerSelection, "win")
        } else if (computerSelection == "paper") { 
            return Jugde(playerSelection, computerSelection, "tie")
        } else if (computerSelection == "scissors") {
            return Jugde(playerSelection, computerSelection, "lose")
        }
    }    
}

function Jugde(playerSelection, computerSelection, result) {
    const computer = computerSelection.toUpperCase();
    const player = playerSelection.toUpperCase();
    if(result == "win") {
        return `
        USER: ${player}     COMPUTER: ${computer}
        YOU WIN - ${player} beats ${computer}
        `
    } else if (result == "lose") {
        return `
        USER: ${player}     COMPUTER: ${computer}
        YOU LOSE - ${computer} beats ${player}
        `
    } else if (result == "tie") {
        return `
        USER: ${player}     COMPUTER: ${computer}
        IT'S A TIE!
        `
    }
}
  
  const playerSelection = "SCISSORS";
  const computerSelection = "scissors"
  console.log(playRound(playerSelection, computerSelection));



// PAPER > ROCK > SCISSOR > PAPER

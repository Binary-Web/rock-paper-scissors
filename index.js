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
        document.querySelector(".result").innerHTML = `
        <div>USER: ${player}&emsp;&emsp;     COMPUTER: ${computer}</div>
        <div>YOU WIN - ${player} beats ${computer}</div>
        `
        scoreBoardUpdate("user")
    } else if (result == "lose") {
        document.querySelector(".result").innerHTML =  `
        <div>USER: ${player}&emsp;&emsp;    COMPUTER: ${computer}</div>
        <div>YOU LOSE - ${computer} beats ${player}</div>
        `
        scoreBoardUpdate("computer")
    } else if (result == "tie") {
        document.querySelector(".result").innerHTML =  `
        <div>USER: ${player} &emsp;&emsp;     COMPUTER: ${computer}</div>
        <div>IT'S A TIE!</div>
        `
    }
    
}

let user = 0;
let computer = 0;
function scoreBoardUpdate(winner) {
    if(winner === "user") {
        user += 1;
        document.querySelector("#user").innerHTML = `USER: ${user}`
    } else if (winner === "computer") {
        computer += 1;
        document.querySelector("#computer").innerHTML = `COMPUTER: ${computer}`
    }
    if(!(user <= 4 && computer <= 4)) {
        alert(document.querySelector(".winner").innerHTML = `WINNER IS ${winner.toUpperCase()}`);
        user = 0;
        computer = 0;
        document.querySelector("#user").innerHTML = `USER: ${user}`
        document.querySelector("#user").innerHTML = `COMPUTER: ${computer}`
    }





}


const rps = document.querySelectorAll('.options');
const computerChoices = ["rock", "paper", "scissors"];

function test() {
    console.log(option)
}

rps.forEach(option => {
    console.log(option)
    option.addEventListener("click", () => {
        playRound(option.innerHTML, computerChoices[Math.floor(Math.random() * 3)])
    })
})

// PAPER > ROCK > SCISSOR > PAPER

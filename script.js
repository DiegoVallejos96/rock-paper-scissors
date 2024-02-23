console.log("Welcome players...");

const div = document.querySelector('div')
const piedra = document.createElement('button')
piedra.setAttribute('id','rockBtn')
piedra.textContent = 'rock';
div.appendChild(piedra)
const papel = document.createElement('button')
papel.setAttribute('id','paperBtn')
papel.textContent = 'paper';
div.appendChild(papel)
const tijera = document.createElement('button')
tijera.setAttribute('id','scissorsBtn')
tijera.textContent = 'scissors';
div.appendChild(tijera)

const partidos = document.createElement('span')
partidos.setAttribute('class','matchs')
let matchs = 0

const puntosPlayer = document.createElement('span')
puntosPlayer.setAttribute('class','puntosPlayer')
let playerScore = 0

const puntosCompu = document.createElement('span')
puntosCompu.setAttribute('class','puntosCompu')
let computerScore = 0


function getComputerChoice () {
    optRandom = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (optRandom == 1){
        return "rock"
    }else if (optRandom == 2){
        return "paper"
    }else if (optRandom == 3){
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection == "rock" & computerSelection == "paper"){
        computerScore ++
        matchs++
        return "You Lose! Paper beats Rock"
    }else if (playerSelection == "paper" & computerSelection == "rock"){
        playerScore ++
        matchs++
        return "You Win! Paper beats Rock"
    }else if   (playerSelection == "paper" & computerSelection == "scissors"){
        computerScore ++
        matchs++
        return "You Lose! Scissors beats Paper"
    }else if  (playerSelection == "scissors" & computerSelection == "paper"){
        playerScore ++
        matchs++
        return "You Win! Scissors beats Paper"
    }else if  (playerSelection == "scissors" & computerSelection == "rock"){
        computerScore ++
        matchs++
        return "You Lose! Rock beats Scissors"
    }else if  (playerSelection == "rock" & computerSelection == "scissors"){
        playerScore ++
        matchs++
        return "You Win! Rock beats Scissors"
    }else if (playerSelection == computerSelection){
        matchs++
        return "Tie"
        
    }
    else {
        return "ERROR"
    }  
    

}
        
piedra.addEventListener('click', () =>{
    const playerSelected = "rock"
    const computerSelection = getComputerChoice();
    console.log(playerSelected, computerSelection);
    console.log(playRound(playerSelected,computerSelection));
    console.log(matchs);
    div.appendChild(partidos)
    partidos.textContent = "Match number =" + matchs;
    div.appendChild(puntosCompu)
    puntosCompu.textContent = `Computer points = ${computerScore}`;
    div.appendChild(puntosPlayer)
    puntosPlayer.textContent = `Player points = ${playerScore}`;
    matchsCounter()

})

papel.addEventListener('click', () =>{
    const playerSelected = "paper"
    const computerSelection = getComputerChoice();
    console.log(playerSelected, computerSelection);
    console.log(playRound(playerSelected,computerSelection));
    console.log(matchs);
    div.appendChild(partidos)
    partidos.textContent = "Match number =" + matchs;
    div.appendChild(puntosCompu)
    puntosCompu.textContent = `Computer points = ${computerScore}`;
    div.appendChild(puntosPlayer)
    puntosPlayer.textContent = `Player points = ${playerScore}`;
    matchsCounter()

})

tijera.addEventListener('click', () =>{
    const playerSelected = "scissors"
    const computerSelection = getComputerChoice();
    console.log(playerSelected, computerSelection);
    console.log(playRound(playerSelected,computerSelection));
    console.log(matchs);
    div.appendChild(partidos)
    partidos.textContent = "Match number =" + matchs;
    div.appendChild(puntosCompu)
    puntosCompu.textContent = `Computer points = ${computerScore}`;
    div.appendChild(puntosPlayer)
    puntosPlayer.textContent = `Player points = ${playerScore}`;
    matchsCounter()
})

function matchsCounter(){
    if (matchs == 5 && computerScore < playerScore){
        alert("Winner is...YOU!!!")
        computerScore = 0
        playerScore = 0
        matchs = 0
    }else if (matchs == 5 && computerScore > playerScore){
        alert("Winner is...COMPUTER!!!")
        computerScore = 0
        playerScore = 0
        matchs = 0
    }else if (matchs == 5 && computerScore === playerScore){
        alert("TIE!!! No winners...")
        computerScore = 0
        playerScore = 0
        matchs = 0
    }
}
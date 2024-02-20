console.log("Welcome players...");







  


function playGame(){
    let matchs = 1

        function getPlayerChoice(){
        playerSelecction = prompt("rock, paper or scissors...")
        playerSelected = playerSelecction.toLowerCase()
        if (playerSelected == "rock" ) {
            return playerSelected
        }else if (playerSelected == "paper" ){
            return playerSelected
        }else if (playerSelected == "scissors" ){
            return playerSelected
        }else {
            return prompt("only can select rock, paper or scissors...")
        }
         
    }
    
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
            return "You Lose! Paper beats Rock"
        }else if (playerSelection == "paper" & computerSelection == "rock"){
            return "You Win! Paper beats Rock"
        }else if   (playerSelection == "paper" & computerSelection == "scissors"){
            return "You Lose! Scissors beats Paper"
        }else if  (playerSelection == "scissors" & computerSelection == "paper"){
            return "You Win! Scissors beats Paper"
        }else if  (playerSelection == "scissors" & computerSelection == "rock"){
            return "You Lose! Rock beats Scissors"
        }else if  (playerSelection == "rock" & computerSelection == "scissors"){
            return "You Win! Rock beats Scissors"
        }else if (playerSelection == computerSelection){
            return "Tie"
        }
        else {
            return "ERROR"
        }  
    }


    
    while (matchs <= 5){
        console.log("Match " + matchs + "!");
        const playerSelection = getPlayerChoice();
        console.log("You went for " + playerSelection)
        const computerSelection = getComputerChoice();
        console.log("Computer chose " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        matchs++
    }


}

playGame()


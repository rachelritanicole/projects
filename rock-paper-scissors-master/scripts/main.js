

//These are used by most of the functions
var playerScore = 0;
var computerScore = 0;
var round = 0;


document.getElementById("win-message").textContent = 'Can You Beat The Computer?';
document.getElementById("round").textContent = round;
document.getElementById("playerScore").textContent = playerScore;
document.getElementById("computerScore").textContent = computerScore;

//to capitalize the first letter of output, may change.
function capitalize(choice) {
    return choice.charAt(0).toUpperCase() + choice.slice(1);
}

//Chooses rock paper or scisssors at random for computer
function computerPlay() {
    var computerOptions = ['rock','paper','scissors'];
    return computerOptions[Math.floor(Math.random()*computerOptions.length)];
}





//Plays one round, iterates the round counter, assigns points to winner and returns string.
function playRound(playerHand,computerHand) {
    var playerWin = 'You Win! ' + capitalize(playerHand) + ' Beats ' + capitalize(computerHand) + '.';
    var computerWin = 'You Lose! ' + capitalize(computerHand) + ' Beats ' + capitalize(playerHand) + '.';
    var gameTie = 'Its a Draw! You both chose ' + capitalize(playerHand);
    var badInput = 'Doh! Wrong Choice, Please Choose Rock Paper Or Scissors';
    round++;
        if(playerHand !== 'rock' && playerHand !== 'paper' && playerHand !== 'scissors' ){
            return badInput;
        }
        
        else if(playerHand === computerHand) {
            return gameTie;
        } 
        
        else {
        if(playerHand === 'rock') {
            if (computerHand !== 'paper') {
                playerScore++;
                return playerWin;
            } else {
                computerScore++;
                return computerWin;                 
            }
        }
        if(playerHand === 'paper') {
            if (computerHand !== 'scissors') {
            playerScore++;
            return playerWin;
            } else {
                computerScore++;
                return computerWin; 
            }
        }
        if(playerHand === 'scissors' ) {
            if (computerHand !== 'rock') {
                playerScore++;
                return playerWin;
                
            } else {
                computerScore++;
                return computerWin; 
            }
        }
    
    }       
    }   

//Takes string from playRound as input, iterates game till at least one player reaches 5 points   
function game(player) {
    if(playerScore < 5 && computerScore < 5) {
    var playerSelection = player
    const computerSelection = computerPlay();
    var roundText = playRound(playerSelection,computerSelection);
    document.getElementById("win-message").textContent = roundText;
    document.getElementById("round").textContent = round;
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    }
    
    if (playerScore == 5) {
        document.getElementById('win-message').textContent = 'You beat the Computer!';
        document.getElementById('win-message').setAttribute('style','color: green;');
    }
    if (computerScore == 5) {
        document.getElementById('win-message').textContent = 'Beep Boop! The Computer Wins The Game!!';
        document.getElementById('win-message').setAttribute('style','color: red;');
    }
}  

//Initally had inline HTML onlick attributes, added this section to clean up HTML
var rockBtn = document.querySelector('#rock-btn');
var paperBtn = document.querySelector('#paper-btn');
var scissorsBtn = document.querySelector('#scissors-btn');
var resetButton = document.querySelector('#reset-button');


//Event listeners for buttons, each pass their string into game(), 

rockBtn.addEventListener('click', ()=>  {
    game('rock');
});

paperBtn.addEventListener('click', ()=>  {
    game('paper');
});

scissorsBtn.addEventListener('click', ()=>  {
    game('scissors');
});



//The reset button clears the gameboard
resetButton.addEventListener('click', ()=>  {
    playerScore = 0;
    computerScore = 0;
    round = 0;
    document.getElementById('win-message').setAttribute('style','color: black;');
    document.getElementById("round").textContent = round;
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("win-message").textContent = 'Can you beat the Computer?';

});
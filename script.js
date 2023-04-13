const Figures = {
    Rock : "Rock",
    Paper : "Paper",
    Scissors : "Scissors"
}
const Figures_Array = Object.keys(Figures)

const win = document.querySelector('.window')
const userScoreDiv = document.querySelector('.userScore')
const computerScoreDiv = document.querySelector('.computerScore')

const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')

const scores = document.querySelectorAll('.window div')

let userCount = 0;
let computerCount = 0;


function getComputerChoice(){
    return Figures_Array[Math.floor(Math.random() * 3)]
}
// console.log(scores.length)
function endGame(){

    // const buttons = document.querySelectorAll('button')
    // buttons.forEach((i) => i.removeEventListener('click', playRound))

    rockButton.removeEventListener('click', foo1);
    paperButton.removeEventListener('click', foo2);
    scissorsButton.removeEventListener('click', foo3);

    scores.forEach((i) => i.remove())
    win.classList.add('end');

    if (userCount > computerCount) {
        win.textContent = "You've won the game!!!"
    }
    else if (userCount < computerCount){
        win.textContent = "You've lost the game!!!"    
    }
    else {
        win.textContent = "It is a draw!!!"
    }
    
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice()
    if (userCount == 5 || computerCount == 5){
        endGame()
        return
    }
    
    const tuple = [playerSelection, computerSelection]
    //console.log(tuple)    
    switch (JSON.stringify(tuple)){
        case JSON.stringify(["Rock", "Rock"]):
            return "Draw";
            break;

        case JSON.stringify(["Rock", "Paper"]):
            computerCount += 1;
            computerScoreDiv.lastChild.textContent = `${computerCount}`;
            return "Lose";
            break;

        case JSON.stringify(["Rock", "Scissors"]):
            userCount += 1;
            userScoreDiv.lastChild.textContent = `${userCount}`;
            return "Win";
            break;

        case JSON.stringify(["Paper", "Rock"]):
            userCount += 1;
            userScoreDiv.lastChild.textContent = `${userCount}`;
            return "Win";
            break;

        case JSON.stringify(["Paper", "Paper"]):
            return "Draw";
            break;

        case JSON.stringify(["Paper", "Scissors"]):
            computerCount += 1;
            computerScoreDiv.lastChild.textContent = `${computerCount}`;
            return "Lose";
            break;
        
        case JSON.stringify(["Scissors", "Rock"]):
            computerCount += 1;
            computerScoreDiv.lastChild.textContent = `${computerCount}`;
            return "Lose";
            break;
    
        case JSON.stringify(["Scissors", "Paper"]):
            userCount += 1;
            userScoreDiv.lastChild.textContent = `${userCount}`;
            return "Win";
            break;
    
        case JSON.stringify(["Scissors", "Scissors"]):
            return "Draw";
            break;
    
        default:
            throw new Error('Undefined Parameters!')    

    }


  }

function foo1(e){
    playRound('Rock')
}
function foo2(e){
    playRound('Paper')
}
function foo3(e){
    playRound('Scissors')
}


rockButton.addEventListener('click', foo1);

paperButton.addEventListener('click', foo2);

scissorsButton.addEventListener('click', foo3);
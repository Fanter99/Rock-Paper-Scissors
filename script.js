console.log("The Game shall begin!\n");

const Figures = {
    Rock : "Rock",
    Paper : "Paper",
    Scissors : "Scissors"
}
const Figures_Array = Object.keys(Figures)

function getComputerChoice(){
    console.log(Figures_Array[Math.floor(Math.random() * 3)])
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection, computerSelection){
        case ("Rock", "Rock"):
            return "Draw";
            break;

        case ("Rock", "Paper"):
            return "Lose";
            break;

        case ("Rock", "Scissors"):
            return "Win!";
            break;

        case ("Paper", "Rock"):
            return "Win!";
            break;

        case ("Paper", "Paper"):
            return "Draw";
            break;

        case ("Paper", "Scissors"):
            return "Lose";
            break;
        
        case ("Scissors", "Rock"):
            return "Lose!";
            break;
    
        case ("Scissors", "Paper"):
            return "Win";
            break;
    
        case ("Scissors", "Scissors"):
            return "Draw";
            break;
    
        default:
            throw new Error('Undefined Parameters!')    

    }
    

  }
   

console.log(playRound("Rock", "Scissors"));
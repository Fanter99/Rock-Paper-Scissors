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

    const tuple = [playerSelection, computerSelection]    
    switch (JSON.stringify(tuple)){
        case JSON.stringify(["Rock", "Rock"]):
            return "Draw";
            break;

        case JSON.stringify(["Rock", "Paper"]):
            return "Lose";
            break;

        case JSON.stringify(["Rock", "Scissors"]):
            return "Win!";
            break;

        case JSON.stringify(["Paper", "Rock"]):
            return "Win!";
            break;

        case JSON.stringify(["Paper", "Paper"]):
            return "Draw";
            break;

        case JSON.stringify(["Paper", "Scissors"]):
            return "Lose";
            break;
        
        case JSON.stringify(["Scissors", "Rock"]):
            return "Lose!";
            break;
    
        case JSON.stringify(["Scissors", "Paper"]):
            return "Win";
            break;
    
        case JSON.stringify(["Scissors", "Scissors"]):
            return "Draw";
            break;
    
        default:
            throw new Error('Undefined Parameters!')    

    }
    

  }
   

console.log(playRound("Paper", "Scissors"));
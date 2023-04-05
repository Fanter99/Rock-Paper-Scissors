console.log("The Game shall begin!\n");

const Figures = {
    Rock : "Rock",
    Paper : "Paper",
    Scissors : "Scissors"
}
const Figures_Array = Object.keys(Figures)

function getComputerChoice(){
    return Figures_Array[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {

    const tuple = [playerSelection, computerSelection]
    // console.log(tuple)    
    switch (JSON.stringify(tuple)){
        case JSON.stringify(["Rock", "Rock"]):
            return "Draw";
            break;

        case JSON.stringify(["Rock", "Paper"]):
            return "Lose";
            break;

        case JSON.stringify(["Rock", "Scissors"]):
            return "Win";
            break;

        case JSON.stringify(["Paper", "Rock"]):
            return "Win";
            break;

        case JSON.stringify(["Paper", "Paper"]):
            return "Draw";
            break;

        case JSON.stringify(["Paper", "Scissors"]):
            return "Lose";
            break;
        
        case JSON.stringify(["Scissors", "Rock"]):
            return "Lose";
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
   
function game() {
    let count = [0,0]
    for (let i = 0; i<5 ; i++) {
        let UserChoise = prompt("Your figure?")
        UserChoise = UserChoise.toLowerCase()
        
        UserChoise = UserChoise.substring(0,1).toUpperCase() + UserChoise.substring(1)
        console.log(UserChoise)
        let ComputerChoice = getComputerChoice()
        // console.log(UserChoise, ComputerChoice)

        let Round = playRound(UserChoise, ComputerChoice)
        
        switch (Round) {
            case "Win":
                console.log(`You've won the ${i+1} round`)
                count[0] += 1
                break;
            case "Lose":
                console.log(`You've lost the ${i+1} round`)
                count[1] += 1
                break;
            default:
                console.log(`it was a draw.`)    

        }
        console.log(`Current count is ${count[0]}:${count[1]}`)
    }
    if (count[0] > count[1]) {
        console.log("You've won the game!!!")
    }
    else if (count[0] < count[1]){
        console.log("You've lost the game!!!")        
    }
    else {
        console.log("It is a draw!!!")
    }
}  

game()
var userChoice = prompt("Let's play rock-paper-scissors. Do you choose rock, paper or scissors?");          
var computerChoice = Math.random();                                                                         
if (computerChoice < 0.34){
    computerChoice = "rock";
} else if (computerChoice <= 0.67){
    computerChoice = "paper";
} else {
computerChoice = "scissors"; }

// userChoice - CHOICE 1
//computerChoice - CHOICE 2

var whoWins = function(choice1, choice2) {
    if ( choice1 === choice2) {
        return "It's a tie!"
    } else if ( choice1 === "rock" && choice2 === "scissors" ) {
        return "You win!"
    } else if ( choice1 === "rock" && choice2 === "paper") {
        return "You lose- paper wins!"
    } else if ( choice1 === "paper" && choice2 === "rock") {
        return "You win!"
    } else if ( choice1 === "paper" && choice2 === "scissors") {
        return "You lose- scissors wins!"
    } else if (choice1 === "paper" && choice2 === "rock") {
        return "You win!"
    } else if ( choice1 === "paper" && choice2 === "scissors") {
        return "You lose- scissors wins!"
    } else if (choice1 === "scissors" && choice2 === "paper") {
        return "You win!" 
    } else if (choice1 === "scissors" && choice2 === "rock") {
        return "You lose- rock wins!"
    }
    
    else { return "Please enter rock, paper, or scissors- no lizard or Spock!" }
    }

    console.log(computerChoice);
    alert(whoWins(userChoice, computerChoice));










// ALTERNATE - NESTED
// var compare = function(choice1,choice2){
//     if(choice1===choice2){
//         return "The result is a tie!";
//     }
//     else if(choice1==="rock") {
//         if(choice2==="scissors") {
//             return "You win!"
//         }
//         else if(choice2==="paper") {
//             return "You lose- paper wins!"; }
//     }
//     else if(choice1==="paper") {
//         if(choice2==="scissors") {
//             return "You lose- scissors win!"
//         }
//         else if(choice2==="rock"){
//             return "You win!"; }
//     }
//     else if(choice1==="scissors") {
//         if(choice2==="paper") {
//             return "You win!"
//         }
//         else if(choice2==="rock") {
//             return "You lose- rock wins!"; }
//     } 
//     else { return "Please enter rock, paper, or scissors- no lizard or Spock!"}
// }
// alert(compare(userChoice,computerChoice));


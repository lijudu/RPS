// Log player's selection as event listener
// assign value 1=rock, 2=scissors, 3=paper to player selection 
let selectRock = 1;

let rockBTN = document.getElementById("rockBTN");
let paperBTN = document.getElementById("paperBTN");
let scissorsBTN = document.getElementById("scissorsBTN");

rockBTN.addEventListener("click", function(){
    console.log(selectRock);
});

paperBTN.addEventListener("click", function (){
    console.log("Paper");
});

scissorsBTN.addEventListener("click", function(){
    console.log("Scissors");
});

// create function compuerPlay that randomly returns rock, paper, or scissors 
// generate random number 1, 2, or 3
// assign value 1=rock, 2=scissors, 3=paper
// unhide value to show opponent selection


// write a function that play single round of RPS: compare playerSelection and computerSelection and declare winner 


//play 5 rounds and declare winner at the end of round
// Log player's selection as event listener
// assign value 1=rock, 2=scissors, 3=paper to player selection 
let selectRock = 1;
let selectPaper = 2;
let selectScissors = 3;

let rockBTN = document.getElementById("rockBTN");
let paperBTN = document.getElementById("paperBTN");
let scissorsBTN = document.getElementById("scissorsBTN");

rockBTN.addEventListener("click", function(){
    console.log(selectRock);
});

paperBTN.addEventListener("click", function (){
    console.log(selectPaper);
});

scissorsBTN.addEventListener("click", function(){
    console.log(selectScissors);
});

// create function computerPlay that randomly returns rock, paper, or scissors 
// generate random number 1 (rock), 2 (paper), or 3 (scissors) to computer's selection 
// unhide value to show opponent selection
let compRock = 1;
let compPaper = 2;
let compScissors = 3;


function compSel() {
    let ranNumb = Math.floor(Math.random() * 3) + 1;
        if (ranNumb == 1) {
            document.getElementById("compRock").style.display="block";
            document.getElementById("compPaper").style.display="none";
            document.getElementById("compScissors").style.display="none";
        }
        else if (ranNumb == 2) {
            document.getElementById("compPaper").style.display="block";
            document.getElementById("compRock").style.display="none";
            document.getElementById("compScissors").style.display="none";
            
        }
        else if (ranNumb ==3) {
            document.getElementById("compScissors").style.display="block";
            document.getElementById("compPaper").style.display="none";
            document.getElementById("compRock").style.display="none";
        }
}


// write a function that play single round of RPS: compare playerSelection and computerSelection and declare winner 


//play 5 rounds and declare winner at the end of round
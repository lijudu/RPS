// Log player's selection as event listener
// assign value 1=rock, 2=scissors, 3=paper to player selection 

rockBTN.addEventListener("click", function() {
        rockBTN.style.backgroundColor = "#F6828C";
        paperBTN.style.backgroundColor = "white";
        scissorsBTN.style.backgroundColor ="white";
        return chooseRock = 1;        
});

paperBTN.addEventListener("click", function (){
    paperBTN.style.backgroundColor = "#F6828C";
    rockBTN.style.backgroundColor ="white";
    scissorsBTN.style.backgroundColor ="white";
    return choosePaper = 1;
});     

scissorsBTN.addEventListener("click", function(){
    scissorsBTN.style.backgroundColor = "#F6828C";
    rockBTN.style.backgroundColor ="white";
    paperBTN.style.backgroundColor ="white";
    return chooseScissors = 1;
});


// generate random number 1 (rock), 2 (paper), or 3 (scissors) to computer's selection
// unhide value to show computer selection
//declare winner 
var playerCount = 0;
var computerCount = 0;

rockBTN.addEventListener("click",function(){
    let ranNumb = Math.floor(Math.random() * 3) + 1;
        if (ranNumb == 1 & chooseRock ==1) {
            document.getElementById("compRock").style.display="block";
            document.getElementById("compPaper").style.display="none";
            document.getElementById("compScissors").style.display="none";
            document.getElementById("drawMessage").style.display="block";
            document.getElementById("winPlayer").style.display="none";
            document.getElementById("winComputer").style.display="none";
            playerCount++;
            return(playerCount);


        }
        else if (ranNumb == 2) {
            document.getElementById("compPaper").style.display="block";
            document.getElementById("compRock").style.display="none";
            document.getElementById("compScissors").style.display="none";
            document.getElementById("drawMessage").style.display="none";
            document.getElementById("winPlayer").style.display="none";
            document.getElementById("winComputer").style.display="block";
            computerCount++;
            return(computerCount);
            
        }
        else if (ranNumb ==3) {
            document.getElementById("compScissors").style.display="block";
            document.getElementById("compPaper").style.display="none";
            document.getElementById("compRock").style.display="none";
            document.getElementById("drawMessage").style.display="none";
            document.getElementById("winPlayer").style.display="block";
            document.getElementById("winComputer").style.display="none"
            playerCount++;
            return(playerCount);
        }
});

paperBTN.addEventListener("click",function(){
    let ranNumb = Math.floor(Math.random() * 3) + 1;
        if (ranNumb == 1 & choosePaper ==1) {
            document.getElementById("compRock").style.display="block";
            document.getElementById("compPaper").style.display="none";
            document.getElementById("compScissors").style.display="none";
            document.getElementById("drawMessage").style.display="none";
            document.getElementById("winPlayer").style.display="block";
            document.getElementById("winComputer").style.display="none";
            playerCount++;
            return(playerCount);
        }
        else if (ranNumb == 2) {
            document.getElementById("compPaper").style.display="block";
            document.getElementById("compRock").style.display="none";
            document.getElementById("compScissors").style.display="none";
            document.getElementById("drawMessage").style.display="block";
            document.getElementById("winPlayer").style.display="none";
            document.getElementById("winComputer").style.display="none";
            playerCount++;
            return(playerCount);
            computerCount++;
            return(computerCount);
            
        }
        else if (ranNumb ==3) {
            document.getElementById("compScissors").style.display="block";
            document.getElementById("compPaper").style.display="none";
            document.getElementById("compRock").style.display="none";
            document.getElementById("drawMessage").style.display="none";
            document.getElementById("winPlayer").style.display="none";
            document.getElementById("winComputer").style.display="block"
            computerCount++;
            return(computerCount);
        }
});

scissorsBTN.addEventListener("click",function(){
    let ranNumb = Math.floor(Math.random() * 3) + 1;
        if (ranNumb == 1 & chooseScissors ==1) {
            document.getElementById("compRock").style.display="block";
            document.getElementById("compPaper").style.display="none";
            document.getElementById("compScissors").style.display="none";
            document.getElementById("drawMessage").style.display="none";
            document.getElementById("winPlayer").style.display="none";
            document.getElementById("winComputer").style.display="block";
            computerCount++;
            return(computerCount);
        }
        else if (ranNumb == 2) {
            document.getElementById("compPaper").style.display="block";
            document.getElementById("compRock").style.display="none";
            document.getElementById("compScissors").style.display="none";
            document.getElementById("drawMessage").style.display="none";
            document.getElementById("winPlayer").style.display="block";
            document.getElementById("winComputer").style.display="none";
            playerCount++
            return(playerCount);
            
        }
        else if (ranNumb ==3) {
            document.getElementById("compScissors").style.display="block";
            document.getElementById("compPaper").style.display="none";
            document.getElementById("compRock").style.display="none";
            document.getElementById("drawMessage").style.display="block";
            document.getElementById("winPlayer").style.display="none";
            document.getElementById("winComputer").style.display="none";
            playerCount++;
            return(playerCount);
            computerCount++;
            return(computerCount);
        }
});

//play 5 rounds and declare winner at the end of round
const winner = setInterval(counter, 5);
function counter() {
    if (playerCount == 5) {
        clearInterval(winner);
        console.log("Player Wins!");
    }
    else if (computerCount ==5){
        clearInterval(winner);
        console.log("Computer Wins!");
    }
}
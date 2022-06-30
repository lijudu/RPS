// Log player's selection as event listener
// assign value 1=rock, 2=scissors, 3=paper to player selection 
Array.from(document.getElementsByClassName("Rock"))
.forEach(function(element) {
    element.addEventListener("click", function () {
        console.log("Rock");
    });
});


Array.from(document.getElementsByClassName("Paper"))
    .forEach(function(element) {
        element.addEventListener("click", function () {
            console.log("Paper");
        });
    });

Array.from(document.getElementsByClassName("Scissors"))
    .forEach(function(element) {
        element.addEventListener("click", function () {
            console.log("Scissors");
        });
    });
// create function compuerPlay that randomly returns rock, paper, or scissors 
// generate random number 1, 2, or 3
// assign value 1=rock, 2=scissors, 3=paper
// unhide value to show opponent selection


// write a function that play single round of RPS: compare playerSelection and computerSelection and declare winner 


//play 5 rounds and declare winner at the end of round
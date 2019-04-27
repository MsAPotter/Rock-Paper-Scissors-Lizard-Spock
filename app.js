var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score"); //DOM variables
var computerScore_span = document.getElementById("computer-score"); //DOM variables
var scoreBoard_div = document.querySelector(".score-board");//use _ to identify that variable is a DOM
var result_div = document.querySelector(".result"); // use <div> to identify what element it is
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissors_div = document.getElementById("s");
var lizard_div = document.getElementById("l");
var spock_div = document.getElementById("k");

function getComputerChoice() {
    var choices = ['r','p','s','l','k'];
    var randomNumber = (Math.floor(Math.random()*  5));
    return choices[randomNumber];
}

function convertToWord (letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
    if (letter === "l") return "Lizard";
    return "Spock";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win! BOOM!!";

    document.getElementById(userChoice).classList.add('green-glow'); // extra
    setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow')}, 300); // extra
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(userChoice) + " loses to " + convertToWord(computerChoice) + ". You lose.";

    document.getElementById(userChoice).classList.add('red-glow'); // extra
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow')}, 300); // extra
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "It's a draw! Try again";

    document.getElementById(userChoice).classList.add('gray-glow'); // extra
    setTimeout(function() { document.getElementById(userChoice).classList.remove('gray-glow')}, 300); //extra
}


function game(userChoice) {
    var computerChoice = getComputerChoice();

    // 
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":

        case "rl":
        case "lk":
        case "ks":
        case "sl":
        case "lp":
        case "pk":
        case "kr":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":

        case "lr":
        case "kl":
        case "sk":
        case "ls":
        case "pl":
        case "kp":
        case "rk":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
        case "ll":
        case "kk":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
    game("r");
    })
        // rock_div.addEventListener('click', () => game("r"));

    paper_div.addEventListener('click', function () {
    game("p");
    })
        // paper_div.addEventListener('click', () => game("p"));

    scissors_div.addEventListener('click', function () {
    game("s");
    })
        // scissors_div.addEventListener('click', () => game("s"));
    lizard_div.addEventListener('click', function () {
    game("l");
    })
    spock_div.addEventListener('click', function () {
    game("k");
    })
}

main();


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
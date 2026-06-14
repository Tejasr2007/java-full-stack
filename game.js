function playGame(playerChoice) {

    let choices = ["Rock", "Paper", "Scissors"];

    let randomIndex = Math.floor(Math.random() * 3);

    let computerChoice = choices[randomIndex];

    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a Draw!";
    }
    else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "You Win!";
    }
    else {
        result = "Computer Wins!";
    }

    document.getElementById("player-choice").textContent =
        "Your Choice: " + playerChoice;

    document.getElementById("computer-choice").textContent =
        "Computer Choice: " + computerChoice;

    document.getElementById("result").textContent =
        "Result: " + result;
}
const board = document.getElementById("gameBoard");
const movesText = document.getElementById("moves");
const timerText = document.getElementById("timer");
const restartBtn = document.getElementById("restartBtn");

const emojis = ["🍎","🍌","🍇","🍓","🍎","🍌","🍇","🍓"];

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matchedPairs = 0;
let time = 0;
let timer;

function shuffle(array){
    return array.sort(() => Math.random() - 0.5);
}

function startGame(){

    board.innerHTML = "";

    moves = 0;
    matchedPairs = 0;
    time = 0;

    movesText.textContent = "Moves: 0";
    timerText.textContent = "Time: 0s";

    clearInterval(timer);

    timer = setInterval(() => {
        time++;
        timerText.textContent = "Time: " + time + "s";
    },1000);

    const shuffledCards = shuffle([...emojis]);

    shuffledCards.forEach(emoji => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.dataset.emoji = emoji;

        card.textContent = "?";

        card.addEventListener("click", flipCard);

        board.appendChild(card);
    });
}

function flipCard(){

    if(lockBoard) return;

    if(this === firstCard) return;

    this.textContent = this.dataset.emoji;
    this.classList.add("flipped");

    if(!firstCard){
        firstCard = this;
        return;
    }

    secondCard = this;

    moves++;
    movesText.textContent = "Moves: " + moves;

    checkMatch();
}

function checkMatch(){

    if(firstCard.dataset.emoji === secondCard.dataset.emoji){

        firstCard.classList.add("matched");
        secondCard.classList.add("matched");

        matchedPairs++;

        resetTurn();

        if(matchedPairs === 4){

            clearInterval(timer);

            setTimeout(() => {
                alert(
                    "Congratulations!\n" +
                    "Moves: " + moves +
                    "\nTime: " + time + " seconds"
                );
            },300);
        }

    }else{

        lockBoard = true;

        setTimeout(() => {

            firstCard.textContent = "?";
            secondCard.textContent = "?";

            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");

            resetTurn();

        },1000);
    }
}

function resetTurn(){
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

restartBtn.addEventListener("click", startGame);

startGame();
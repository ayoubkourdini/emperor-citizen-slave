import { displayHands, displayDuel } from "./ui.js"
import { saveHistory } from "./storage.js"

export function duel (playerCard, computerCard) {
    if (playerCard === computerCard) {
        return "égalité"
    }
    if (playerCard === "esclave" && computerCard === "empereur") {
        return "victoire"
    }
    if (playerCard === "citoyen" && computerCard === "esclave") {
        return "victoire"
    }
    if (playerCard === "empereur" && computerCard === "citoyen") {
        return "victoire"
    }
    return "défaite"
}
const button = document.getElementById("start-btn");
const gameInfo = document.getElementById("game-info"); 
const board = document.getElementById("game-board");
const gameEnd = document.getElementById("game-end");
const playGround = document.getElementById("play-ground");
const gameEndText = document.getElementById("game-end-text");
const replayBtn = document.getElementById("replay-btn");
const gameManche = document.getElementById("manche");
const gameGroup = document.getElementById("group");
const camp = document.getElementById("camp-player");
const firstPlayer = document.getElementById("first-player");
const pScore = document.getElementById("player-score");
const cScore = document.getElementById("computer-score");
const campEmpereur = ["empereur", "citoyen", "citoyen", "citoyen", "citoyen"];
const campEsclave = ["esclave", "citoyen", "citoyen", "citoyen", "citoyen"];
const plHand = document.getElementById("player-hand");
const cpHand = document.getElementById("computer-hand");
let isLocked = false;
let playerScore = 0;
let computerScore = 0;
let manche = 1;
let group = 1;
let campPlayer = "empereur";
let playerHand = [];
let computerHand = [];


function dealHands () {
    if (campPlayer  === "empereur") {
        playerHand = [...campEmpereur];
        computerHand = [...campEsclave];
    }else {
        playerHand = [...campEsclave];
        computerHand = [...campEmpereur];
    }
}
 



plHand.addEventListener("click", (event) => {
    if (event.target.dataset.index === undefined) {
        return
    }
    if (isLocked === true) {
        return
    }
    const playerIndex = Number(event.target.dataset.index);
    const playerCard = playerHand[playerIndex];
    const computerIndex = Math.floor(Math.random() * computerHand.length);
    const computerCard = computerHand[computerIndex];
    const result = duel(playerCard, computerCard);

    displayDuel(playerCard, computerCard, result);
    isLocked = true;
    setTimeout (() => {
        if (result === "victoire" && campPlayer === "empereur") {
            playerScore += 1;
        } else if (result === "défaite" && campPlayer === "empereur") {
            computerScore += 5
        } else if (result === "victoire" && campPlayer === "esclave") {
            playerScore += 5;
        } else if (result === "défaite" && campPlayer === "esclave") {
            computerScore += 1
        }

        

        if (result !== "égalité") {
            if (manche === 3 || manche === 6 || manche === 9) {
             if (campPlayer === "empereur") {
                campPlayer = "esclave";
            } else {
                campPlayer = "empereur";
            }
            }

            manche += 1;
            dealHands();
            displayHands(playerHand, computerHand);
        }

        const newPlayerHand = [...playerHand];
        const newComputerHand = [...computerHand];

        if (result === "égalité") {
            newPlayerHand.splice(playerIndex, 1);
            newComputerHand.splice(computerIndex, 1);

            playerHand = newPlayerHand;
            computerHand = newComputerHand;
            displayHands(playerHand, computerHand) 
        }

        if (manche > 3 && manche <= 6) {
            group = 2;
        } else if (manche > 6 && manche <= 9) {
            group = 3;
        } else if (manche > 9 && manche <= 12) {
            group = 4;
        } else if (manche > 12) {
            endGame();
        }
        updateStatus()
        displayDuel("", "", "");
        
        if (manche <= 12) {
            isLocked = false;
        }

    }, 2000)


})



button.addEventListener("click", () => {
    dealHands();
    board.classList.remove("hidden");
    displayHands(playerHand, computerHand);
})

function updateStatus () {
    gameManche.textContent ="Manche: " + Math.min(manche,12) + "/12";
    gameGroup.textContent ="groupe: " + group + "/4";
    camp.textContent = "Ton camp: " + campPlayer;
    firstPlayer.textContent = " ";
    pScore.textContent = "Toi: " + playerScore;
    cScore.textContent = "Ordinateur: " +  computerScore;
}
updateStatus()

function endGame () {
    let result = "égalité";
    if (playerScore > computerScore) {
        result = "victoire"
        gameEndText.textContent = "you win"
    } else if (playerScore < computerScore) {
        result = "défaite"
        gameEndText.textContent = "you lose"
    } else {
        gameEndText.textContent = "égalité"
    }
    gameEnd.classList.remove("hidden");
    playGround.classList.add ("hidden");
    plHand.classList.add("hidden");
    gameInfo.classList.add("hidden");

    const game = {
        id: "g_" + Date.now(),
        playerId: "p_test",
        date: new Date().toISOString().slice(0, 16),
        playerScore: playerScore,
        computerScore: computerScore,
        result: result
    };
    saveHistory(game);
    
};

replayBtn.addEventListener("click", (event) => {
        
    playerScore = 0;
    computerScore = 0;
    manche = 1;
    group = 1;
    campPlayer = "empereur"
    dealHands();
    updateStatus()
    displayHands(playerHand, computerHand);
    gameEnd.classList.add("hidden");
    playGround.classList.remove("hidden");
    plHand.classList.remove("hidden");
    gameInfo.classList.remove("hidden");
    isLocked = false;
    displayDuel("", "", "");
       
});
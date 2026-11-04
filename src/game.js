import { displayHands } from "./ui.js"

export function duel (player1Card, player2Card) {
    if (player1Card === player2Card) {
        return "égalité"
    }
    if (player1Card === "esclave" && player2Card === "empereur") {
        return "victoire"
    }
    if (player1Card === "citoyen" && player2Card === "esclave") {
        return "victoire"
    }
    if (player1Card === "empereur" && player2Card === "citoyen") {
        return "victoire"
    }
    return "défaite"
}

const campEmpereur = ["empereur", "citoyen", "citoyen", "citoyen", "citoyen"];
const campEsclave = ["esclave", "citoyen", "citoyen", "citoyen", "citoyen"];
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
 

const plHand = document.getElementById("player-hand");
const cpHand = document.getElementById("computer-hand");

plHand.addEventListener("click", (event) => {
    if (event.target.dataset.index === undefined) {
        return
    }
    const playerIndex = Number(event.target.dataset.index);
    const playerCard = playerHand[playerIndex];
    const computerIndex = Math.floor(Math.random() * computerHand.length);
    const computerCard = computerHand[computerIndex];
    const result = duel(playerCard, computerCard);

    console.log(playerCard);
    console.log(computerCard);
    console.log(result);
})

const button = document.getElementById("start-btn");
const board = document.getElementById("game-board");

button.addEventListener("click", () => {
    dealHands();
    board.classList.remove("hidden");
    displayHands(playerHand, computerHand);
})



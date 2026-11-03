export function duel (a, b) {
    if (a === b) {
        return "égalité"
    }
    if (a === "esclave" && b === "empereur") {
        return "victoire"
    }
    if (a === "citoyen" && b === "esclave") {
        return "victoire"
    }
    if (a === "empereur" && b === "citoyen") {
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
dealHands()


import {displayPlayers, displayCurrentPlayer} from "./ui.js";
import {loadPlayers, loadHistory, saveCurrentPlayer, loadCurrentPlayer } from "./storage.js";
import { addPlayer } from "./players.js";

displayPlayers(loadPlayers(), loadHistory());


const form = document.getElementById("profile-form");
const name = document.getElementById("nickname");
const psuedoError = document.getElementById("profile-error");
const avatarError = document.getElementById("avatar-error");
const buttons = document.querySelectorAll(".avatar");
let selectedAvatar = "";

buttons.forEach((svg, index) => {
    svg.addEventListener("click", () => {
        selectedAvatar = index;
        buttons.forEach((b) => b.classList.remove("ring-4", "ring-amber-400"));
        svg.classList.add("ring-4", "ring-amber-400");
    })
});


form.addEventListener("submit", (event) => {
    event.preventDefault();
    psuedoError.textContent = "";
    avatarError.textContent = "";

    const nickname = name.value.trim();
    const regex = /^[A-Za-z0-9]{3,15}$/;

    if (regex.test(nickname) === false){
        psuedoError.textContent = "pseudo : 3 à 15 caractères, letters et chiffres seulement.";
        return 
    }

    const players = loadPlayers();
    const exists = players.some((player) => {
        return player.nickname.toLowerCase() === nickname.toLowerCase();
    })

    if (exists) {
        psuedoError.textContent = "Ce psuedo existe déjà."
        return
    }

    if (selectedAvatar === "") {
        avatarError.textContent = "Veuillez sélectionner un avatar."
        return
    }
    addPlayer(nickname, selectedAvatar)
    displayPlayers(loadPlayers(), loadHistory());
    name.value = "";
    selectedAvatar = "";
    buttons.forEach((b) => b.classList.remove("ring-4", "ring-amber-400"));
});

function refresh () {
    const players = loadPlayers();
    displayPlayers(players, loadHistory(), loadCurrentPlayer());
    displayCurrentPlayer(players, loadCurrentPlayer()); 
}
refresh();

const list = document.getElementById("profile-list");
list.addEventListener("click", (event) => {
    const clicked = event.target.closest("button");
    if (clicked === null) {
        return
    }
    saveCurrentPlayer(clicked.dataset.id);
    refresh();  
})


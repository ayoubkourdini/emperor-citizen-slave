import {displayPlayers, displayCurrentPlayer} from "./ui.js";
import {loadPlayers, loadHistory, saveCurrentPlayer, loadCurrentPlayer } from "./storage.js";
import { addPlayer, updatePlayer, deletePlayer } from "./players.js";

const profileId = document.getElementById("profile-id");
const submitBtn = document.getElementById("profile-submit");
const cancelBtn = document.getElementById("profile-cancel");
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

    const id = profileId.value;
    const nickname = name.value.trim();
    const regex = /^[A-Za-z0-9]{3,15}$/;

    if (regex.test(nickname) === false){
        psuedoError.textContent = "psuedo : 3 à 15 caractères, letters et chiffres seulement.";
        return 
    }

    const players = loadPlayers();
    const exists = players.some((player) => {
        return player.nickname.toLowerCase() === nickname.toLowerCase() && player.id !== id;
    })

    if (exists) {
        psuedoError.textContent = "Ce psuedo existe déjà."
        return
    }

    if (selectedAvatar === "") {
        avatarError.textContent = "Veuillez sélectionner un avatar."
        return
    }

    if (id === "") {
        addPlayer(nickname, selectedAvatar);
    } else {
        updatePlayer(id, nickname, selectedAvatar);
    }

    resetForm();
    refresh();
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

    if (clicked.dataset.action === "choose") {
        saveCurrentPlayer(clicked.dataset.id);
        refresh();
    }

    if (clicked.dataset.action === "edit") {
        const player = loadPlayers().find(p => p.id === clicked.dataset.id);
        resetForm();
        profileId.value = player.id;
        name.value = player.nickname;
        selectedAvatar = player.avatar;
        buttons[player.avatar].classList.add("ring-4", "ring-amber-400");
        submitBtn.textContent = "Enregistrer";
    }

    if (clicked.dataset.action === "delete") {
        if (confirm("Supprimer ce profil ? Ses parties resteront dans l'historique.") === false) {
            return;
        }
        deletePlayer(clicked.dataset.id);
        resetForm();
        refresh();
    }
})

function resetForm () {
    name.value = "";
    selectedAvatar = "";
    profileId.value = "";
    submitBtn.textContent = "Ajouter";
    psuedoError.textContent = "";
    avatarError.textContent = "";
    buttons.forEach((b) => b.classList.remove("ring-4", "ring-amber-400"));
}

cancelBtn.addEventListener("click", resetForm);
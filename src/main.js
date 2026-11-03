import {displayPlayers} from "./ui.js";
import {loadPlayers } from "./storage.js";
import { addPlayer } from "./players.js";

displayPlayers(loadPlayers());


const form = document.getElementById("profile-form");
const name = document.getElementById("nickname");
const psuedoError = document.getElementById("profile-error");
const ava = document.getElementById("avatar-list");
const avatarError = document.getElementById("avatar-error");
const buttons = document.querySelectorAll(".avatar");
let selectedAvatar = "";

buttons.forEach((svg, index) => {
    svg.addEventListener("click", () => {
        selectedAvatar = index;
        console.log(selectedAvatar)
    })
});


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nickname = name.value.trim()
    if (nickname === ""){
        psuedoError.textContent = "pseudo est obligatoire"
        return 
    }
    if (selectedAvatar === "") {
        avatarError.textContent = "Veuillez sélectionner un avatar."
        return
    }
    addPlayer(nickname, selectedAvatar)
    displayPlayers(loadPlayers());
    name.value = "";
    selectedAvatar = "";
    psuedoError.textContent = "";
    avatarError.textContent = "";


    });



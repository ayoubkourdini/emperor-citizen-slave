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

buttons.forEach((svg, index) => {
    svg.addEventListener("click", () => {
        console.log(index);
    })
});


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nickname = name.value.trim()
    if (nickname === "") {
        psuedoError.textContent = "pseudo est obligatoire"
        return 
    }
    const avatar= ava.value;
    if (avatar === "") {
        avatarError.textContent = "Veuillez sélectionner un avatar."
        return
    }
    addPlayer(nickname, avatar)
    displayPlayers(loadPlayers());
    name.value = "";
    ava.value = "";
    psuedoError.textContent = "";
    avatarError.textContent = "";


    });



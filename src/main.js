import {displayPlayers} from "./ui.js";
import {loadPlayers } from "./storage.js";
import { addPlayer } from "./players.js";

displayPlayers(loadPlayers());


const form = document.getElementById("profile-form");
const name = document.getElementById("nickname");
const error = document.getElementById("profile-error");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nickname = name.value.trim()
    if (nickname === "") {
        error.textContent = "pseudo est obligatoire"
        return 
    }
    addPlayer(nickname)
    displayPlayers(loadPlayers());
    name.value = "";
    error.textContent = "";

})


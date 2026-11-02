import {displayPlayers} from "./ui.js";
import {loadPlayers } from "./storage.js";
import { addPlayer } from "./players.js";



displayPlayers(loadPlayers());

const form = document.getElementById("profile-form");
const name = document.getElementById("nickname");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nickname = name.value
})

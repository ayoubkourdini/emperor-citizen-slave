import {displayPlayers} from "./ui.js";
import { savePlayers, loadPlayers } from "./storage.js";

const arr = [{nickname: "Sara"}, {nickname: "Aziz"}];

displayPlayers(arr);
savePlayers(arr);
console.log(loadPlayers())

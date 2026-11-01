import {displayPlayers} from "./ui.js";
import { savePlayers } from "./storage.js";

const arr = [{nickname: "Sara"}, {nickname: "Aziz"}];

displayPlayers(arr);
savePlayers(arr);
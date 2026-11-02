import {displayPlayers} from "./ui.js";
import {loadPlayers } from "./storage.js";
import { addPlayer } from "./players.js";



displayPlayers(loadPlayers());

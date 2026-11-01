import {displayPlayers} from "./ui.js";
import {loadPlayers } from "./storage.js";



displayPlayers(loadPlayers());

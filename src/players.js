import { loadPlayers, savePlayers } from "./storage.js";

export function addPlayer (nickname) {
    const players = loadPlayers()
    players.push({id: Date.now(), nickname: nickname, createdAt: new Date().toISOString()})
    savePlayers(players)

}
import { loadPlayers, savePlayers } from "./storage.js";

export function addPlayer (nickname, avatar) {
    const players = loadPlayers()
    players.push({
        id: "p_" + Date.now(),
        nickname: nickname,
        createdAt: new Date().toISOString().slice(0,10)
    })
    savePlayers(players)
}
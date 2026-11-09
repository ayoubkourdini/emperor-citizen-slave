import { loadPlayers, savePlayers, loadCurrentPlayer, clearCurrentPlayer } from "./storage.js";

export function addPlayer (nickname, avatar) {
    const players = loadPlayers()
    players.push({
        id: "p_" + Date.now(),
        nickname: nickname,
        avatar: avatar,
        createdAt: new Date().toISOString().slice(0,10)
    })
    savePlayers(players)
}

export function updatePlayer (id, nickname, avatar) {
    const players = loadPlayers()
    const player = players.find(p => p.id === id)
    player.nickname = nickname
    player.avatar = avatar
    savePlayers(players)
}


export function deletePlayer (id) {
    const players = loadPlayers().filter(p => p.id !== id)
    savePlayers(players)

    if (loadCurrentPlayer() === id) {
        clearCurrentPlayer()
    }
}
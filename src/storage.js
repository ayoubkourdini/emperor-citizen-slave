export function savePlayers(players) {
   const text = JSON.stringify(players);
   localStorage.setItem("players", text);
}

export function loadPlayers() {
    const text = localStorage.getItem("players");
    if (text == null) {
        return [];
    }
    return JSON.parse(text)
} 

export function saveHistory (game) {
    const history = JSON.parse(localStorage.getItem("history")) || [];
    history.push(game);
    localStorage.setItem("history", JSON.stringify(history));
}
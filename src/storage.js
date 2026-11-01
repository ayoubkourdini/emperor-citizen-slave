export function savePlayers(players) {
   const text = JSON.stringify(players);
   localStorage.setItem("players", text);
}

function loadPlayers() {} 
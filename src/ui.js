export function displayPlayers (players) {
    const list = document.getElementById("profile-list");
    list.innerHTML = "";
    players.forEach(player => {
       const li = document.createElement("li");
       li.textContent = player.nickname;
       li.className = "bg-slate-800 p-4 rounded-xl text-center";
       list.appendChild(li);
    });
}
 export function displayHands (playerCards, computerCards) {
    const playerBox = document.getElementById("player-hand");
    playerBox.innerHTML = "";
    playerCards.forEach ((card, index) => {
        const button = document.createElement("button");
        button.textContent = card;
        button.dataset.index = index;
        button.className = "w-16 h-24 rounded-lg bg-slate-100 text-slate-900 font-bold"
        playerBox.appendChild(button);
    });

    const computerBox = document.getElementById("computer-hand");
    computerBox.innerHTML = "";
    computerCards.forEach (() => {
        const div = document.createElement("div");
        div.className = "w-16 h-24 rounded-lg bg-emerald-800 border border-emerald-600"
        computerBox.appendChild(div);
    });

     
 } 
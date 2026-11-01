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

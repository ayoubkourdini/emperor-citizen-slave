import { loadHistory, loadPlayers, loadCurrentPlayer } from "./storage.js";
import { displayCurrentPlayer } from "./ui.js";

const searchInput = document.getElementById("search");
const resultFilter = document.getElementById("filter-result");
const dateFilter = document.getElementById("filter-date");
const list = document.getElementById("history-list");
const emptyMessage = document.getElementById("empty-message");

displayCurrentPlayer(loadPlayers(), loadCurrentPlayer());

function show () {
    const players = loadPlayers();
    const search = searchInput.value.trim().toLowerCase();
    const games = [...loadHistory()].reverse();
    let count = 0;

    list.innerHTML = "";

    games.forEach((game) => {

        const player = players.find((p) => p.id === game.playerId);
        let nickname = "Joueur supprimé";
        if (player !== undefined) {
            nickname = player.nickname;
        }


        if (nickname.toLowerCase().includes(search) === false) {
            return;
        }


        if (resultFilter.value !== "all" && game.result !== resultFilter.value) {
            return;
        }


        if (dateFilter.value === "today") {
            const today = new Date().toISOString().slice(0, 10);
            if (game.date.slice(0, 10) !== today) {
                return;
            }
        }
        if (dateFilter.value === "week") {
            const limit = Date.now() - 7 * 24 * 60 * 60 * 1000;
            if (new Date(game.date).getTime() < limit) {
                return;
            }
        }


        count += 1;
        let color = "text-slate-300";
        if (game.result === "victoire") {
            color = "text-emerald-400";
        } else if (game.result === "défaite") {
            color = "text-red-400";
        }

        const li = document.createElement("li");
        li.className = "bg-slate-800 p-4 rounded-xl flex items-center gap-4";
        li.innerHTML = `
            <div>
                <p class="font-bold">${nickname}</p>
                <p class="text-sm text-slate-400">${game.date.replace("T", " ")}</p>
            </div>
            <p class="ml-auto text-lg font-bold">${game.playerScore} - ${game.computerScore}</p>
            <p class="w-20 text-center font-bold ${color}">${game.result}</p>
            <button data-id="${game.id}" class="px-3 h-9 rounded-lg bg-red-700 hover:bg-red-600">Supprimer</button>
        `;
        list.appendChild(li);
    });


    if (count === 0) {
        emptyMessage.classList.remove("hidden");
    } else {
        emptyMessage.classList.add("hidden");
    }
}


list.addEventListener("click", (event) => {
    const clicked = event.target.closest("button");
    if (clicked === null) {
        return;
    }
    if (confirm("Supprimer cette partie ?") === false) {
        return;
    }
    const history = loadHistory().filter((game) => game.id !== clicked.dataset.id);
    localStorage.setItem("history", JSON.stringify(history));
    show();
});


searchInput.addEventListener("input", show);
resultFilter.addEventListener("change", show);
dateFilter.addEventListener("change", show);

show();
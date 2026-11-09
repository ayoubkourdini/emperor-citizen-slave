export function displayPlayers (players, history, currentId) {
    const list = document.getElementById("profile-list");
    const title = document.getElementById("profile-list-title");
    const avatars = document.querySelectorAll("#avatar-list .avatar")

    list.innerHTML = "";
    title.textContent = "profils (" + players.length + ")";

    players.forEach(player => {
       const li = document.createElement("li");
       li.className = "bg-slate-800 p-4 rounded-xl flex items-center gap-4";

       const avatar = avatars[player.avatar].cloneNode(true);
       avatar.setAttribute("class", "w-14 h-14 rounded-full");

       const info = document.createElement("div");

       const name = document.createElement("p");
       name.textContent = player.nickname;
       name.className = "font-bold";

       const played = history.filter(game => game.playerId === player.id).length;
       const count = document.createElement("p");
       count.textContent = played + " partie(s) jouée(s)";
       count.className = "text-sm text-slate-400";

       info.appendChild(name);
       info.appendChild(count);
       li.appendChild(avatar);
       li.appendChild(info);

       const buttons = document.createElement("div");
       buttons.className = "ml-auto flex flex-col gap-2"

       const chooseBtn = document.createElement("button");
       chooseBtn.dataset.id = player.id;
       chooseBtn.dataset.action = "choose";
       chooseBtn.className = "px-3 h-9 rounded-lg bg-amber-500 text-slate-900 font-bold hover:bg-amber-400";
       chooseBtn.textContent = "choisir";

       const editBtn = document.createElement("button");
       editBtn.dataset.id = player.id;
       editBtn.dataset.action = "edit";
       editBtn.className = "px-3 h-9 rounded-lg bg-slate-600 hover:bg-slate-500";
       editBtn.textContent = "Modifier";

       buttons.appendChild(chooseBtn);
       buttons.appendChild(editBtn);
       li.appendChild(buttons);


       if (player.id === currentId) {
        li.classList.add("border-2", "border-amber-400");
        chooseBtn.textContent = "choisi"
       }
       list.appendChild(li);
    });
}

export function displayCurrentPlayer (players, currentId) {
    const badge = document.getElementById("current-player");
    const player = players.find(p => p.id === currentId);
    if (player === undefined) {
        badge.textContent = "Aucun joueur choisi";
    } else {
        badge.textContent = player.nickname;
    }
}

 export function displayHands (playerCards, computerCards) {
    const playerBox = document.getElementById("player-hand");
    playerBox.innerHTML = "";
    playerCards.forEach ((card, index) => {
        const button = document.createElement("button");
        button.dataset.index = index;
        button.className = "w-14 h-20 overflow-hidden shadow-lg transition hover:-translate-y-2 rounded-lg md:w-20 md:h-28"

        const img = document.createElement("img");
        img.src = "./images/" + card + ".png";
        img.alt = card;
        img.className = "w-full h-full object-cover"

        button.appendChild(img);
        playerBox.appendChild(button);
    });

    const computerBox = document.getElementById("computer-hand");
    computerBox.innerHTML = "";
    computerCards.forEach (() => {
        const div = document.createElement("div");
        div.className = "w-14 h-20 rounded-lg overflow-hidden shadow-md md:w-20 md:h-28";

        const img = document.createElement("img");
        img.src = "./images/dos.png";
        img.alt = "carte cachéé";
        img.className = "w-full h-full object-cover";

        div.appendChild(img)
        computerBox.appendChild(div);
    });     
 } 

export function displayDuel (playerCard, computerCard, result) {
    const plCard = document.getElementById("player-card");
    const cmplCard = document.getElementById("computer-card");
    const resultat = document.getElementById("game-message");

    showCard(plCard, playerCard);
    showCard(cmplCard, computerCard);
    resultat.textContent = "";
    setTimeout(() => {
        resultat.textContent = result;
    }, 1100)
}

function showCard (box, card) {
    box.innerHTML = "";
    if (card === "") {
        return;
    }

    const img = document.createElement("img");
    img.src = "./images/dos.png";
    img.alt = "carte";
    img.className = "w-full h-full object-cover rounded-lg transition-transform duration-300";
    img.style.transform = "perspective(600px) rotateY(0deg)";
    box.appendChild(img);

    setTimeout(() => {
        img.style.transform = "perspective(600px) rotateY(90deg)";
    }, 500);

    setTimeout(() => {
        img.src = "./images/" + card + ".png";
        img.alt = card;
        img.style.transform = "perspective(600px) rotateY(0deg)";
    }, 800);
}
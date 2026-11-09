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
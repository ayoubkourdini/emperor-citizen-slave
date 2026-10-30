# Empereur, Citoyen, Esclave

Application web responsive pour gérer les profils des joueurs, jouer contre l'ordinateur et consulter l'historique des parties.

## Démarrage
1. Ouvrir ce dossier dans VS Code.
2. Installer l'extension **Live Server** si nécessaire.
3. Ouvrir `index.html` avec Live Server. Ne pas ouvrir le fichier par double-clic : les modules JavaScript nécessitent un serveur local.
4. Le projet utilise Tailwind CSS via CDN pour démarrer rapidement. Pour un rendu final, adaptez l'intégration Tailwind à la configuration demandée par votre formation.

## Organisation des fichiers
- `index.html` : structure générale de l'application.
- `src/main.js` : point d'entrée, événements et coordination.
- `src/game.js` : règles du jeu, duels, manches et scores (sans DOM).
- `src/players.js` : gestion des profils.
- `src/history.js` : historique, recherche et filtres.
- `src/storage.js` : lecture et écriture du LocalStorage.
- `src/ui.js` : affichage des éléments à l'écran.
- `assets/images/` : images éventuelles.
- `assets/icons/` : icônes éventuelles.
- `docs/` : notes de conception et règles.
- `screenshots/` : captures pour les livrables.
- `PROJECT_CHECKLIST.md` : liste de suivi des fonctionnalités.
- `GIT_WORKFLOW.md` : rappel du workflow Git et des Pull Requests.

## Fonctionnalités à réaliser
Voir `PROJECT_CHECKLIST.md`. Ce kit contient une structure de dossiers et des documents d'organisation, pas une solution codée.

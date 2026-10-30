# Modèles de données à prévoir

## Profil
Champs du brief : `id`, `nickname`, `avatar`, `createdAt`.

## Partie enregistrée
Champs du brief : `id`, `playerId`, `date`, `playerScore`, `computerScore`, `result`.

## Stockage
À conserver dans LocalStorage :
- la liste des profils ;
- l'identifiant du joueur sélectionné ;
- la liste des parties terminées.

Attention : si un profil est supprimé, garder ses parties dans l'historique et afficher « Joueur supprimé » pour le pseudo.

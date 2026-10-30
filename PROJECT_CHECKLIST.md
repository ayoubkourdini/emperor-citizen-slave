# Checklist du projet

## Préparation
- [ ] Lire la maquette et identifier les écrans / états.
- [ ] Créer le dépôt GitHub et le tableau GitHub Projects.
- [ ] Préparer `main`, `develop` et les branches de fonctionnalités.
- [ ] Créer l'arborescence des fichiers.
- [ ] Découper le travail en petites cartes.

## Partie 1 — Profils
- [ ] Ajouter un profil avec pseudo de 3 à 15 caractères (lettres/chiffres uniquement).
- [ ] Refuser les pseudos déjà utilisés sans tenir compte des majuscules.
- [ ] Proposer un avatar choisi dans une liste.
- [ ] Afficher les profils et le nombre de parties jouées.
- [ ] Modifier un profil avec les mêmes validations.
- [ ] Supprimer un profil après confirmation.
- [ ] Conserver les anciennes parties et afficher « Joueur supprimé » si nécessaire.
- [ ] Choisir le joueur actif et afficher son pseudo.

## Partie 2 — Jeu
- [ ] Créer les mains selon le camp du joueur.
- [ ] Cacher les cartes de l'ordinateur.
- [ ] Implémenter les quatre cas du duel : victoire, défaite, égalité.
- [ ] Gérer l'égalité en retirant les cartes jouées et en continuant.
- [ ] Arrêter une manche dès qu'une carte gagne, au plus après 5 duels.
- [ ] Attribuer 1 point pour une victoire dans le camp Empereur et 5 dans le camp Esclave.
- [ ] Reconstituer les mains pour chaque manche.
- [ ] Jouer 12 manches, groupées par 3.
- [ ] Changer de camp après les manches 3, 6 et 9.
- [ ] Alterner le camp qui joue en premier à chaque duel.
- [ ] Afficher manche, groupe, camp, premier joueur et scores.
- [ ] Bloquer les clics pendant l'animation.
- [ ] Afficher le résultat final et proposer de rejouer.
- [ ] Enregistrer la partie à la fin.

## Partie 3 — Historique
- [ ] Afficher les parties de la plus récente à la plus ancienne.
- [ ] Rechercher par pseudo sans distinction majuscules/minuscules.
- [ ] Filtrer par résultat : toutes, victoires, défaites, égalités.
- [ ] Filtrer par date : aujourd'hui, 7 derniers jours, tout.
- [ ] Faire fonctionner recherche et filtres ensemble.
- [ ] Supprimer une partie après confirmation.
- [ ] Afficher un message si aucun résultat ne correspond.

## Sauvegarde et interface
- [ ] Sauvegarder les profils, le joueur actif et l'historique dans LocalStorage.
- [ ] Vérifier que les données restent après rechargement.
- [ ] Créer une interface mobile-first avec Tailwind CSS.
- [ ] Prévoir les états hover, focus, erreur et bouton désactivé.
- [ ] Vérifier l'accessibilité et les tailles d'écran.
- [ ] Vérifier la console : aucune erreur.

## Bonus (après les 3 parties obligatoires)
- [ ] Jouer à deux sur le même ordinateur avec un écran de transition.
- [ ] Améliorer les choix de l'ordinateur.
- [ ] Ajouter les statistiques des joueurs.
- [ ] Ajouter le classement par total de points.

## Livrables
- [ ] Livrable 1 : dépôt + GitHub Projects + Pull Request dans `develop` + captures profils/formulaire.
- [ ] Livrable 2 : dépôt à jour + vidéo/GIF d'une partie (1 minute max) + Pull Request du jeu.
- [ ] Livrable 3 : dépôt final + site GitHub Pages + README complet.

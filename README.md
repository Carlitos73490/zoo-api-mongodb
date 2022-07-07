# zoo-api-mongodb

## Projet énoncé
Faire une api node js avec Express avec une exposition de routes sur le thème d’un zoo.
La logique métier est au choix, il faut être créatif.
Au moins deux collections

## Objectifs
- L'Api contient une liste d'animaux appartenant à un zoo
- On peut ajouter et supprimer un animal (Nouveau arrivant/Décès)
- La BDD stock la fréquence à laquelle l'animal doit être nourri ainsi que la quantité de nourriture à donner
- A partir de ça on peut donner la prochaine date à laquelle l'animal doit être nourrir
- Une route doit permettre d'indiquer que l'animal a été nourri

## Extension
Pour avoir une deuxième collection on peut créer une collection gardien de zoo

## Installation du projet
- npm install
- npm run start

## Un identification de connexion pour générer le token
Requête à http://localhost:3000/auth avec les identifiants suivants :
- username: ManteA
- password: 1234

## Librairies externe utilisées
- date-fns : Permet d'avoir des fonctionnnalités de calcul avec des dates
- @faker-js/faker : Permet d'injecter des datas aléatoires en masse


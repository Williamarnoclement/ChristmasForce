# Christmas FORCE: Experience

Christmas Force: Experience est un site internet réalisé avec VueJS et servant de portail de mini jeux sur la Franchise Christmas Force.

Trois expériences viennent s'intégrer à l'expérience du site web: Une expérience Photomaton, un modèle 3D ainsi que le jeu webgl Christmas Force 2.

## L'idée

L'idée est de proposer un site internet regroupant plusieurs expériences complémentaires différentes en rapport avec la franchise Christmas force. Une sorte de mini-hub dans lequel on s'immerge dans l'univers de Noël.

## Expérience 1: Jouer à Christmas FORCE 2

L'intégration du jeu n'a pas été simple. Il faut que export via Unity soit préparé en amont avec la desactivation de fonctionnalités propres à Unity 3D qui ne sont pas compatible avec WebGL.
J'ai eu beaucoup de difficultés à importer le jeu sous Vue, et j'ai d'ailleurs tenté d'utiliser un framework vue intitulé:
```sh
vue-unity-webgl
```
Néanmoins, l'essai ne s'étant pas révélé fructueux car il était pensé de base pour vue 2, je suis passé sur un import plus standard en m'inspirant de ce j'avais fait pour les expériences Photomaton et Figurine 3D.

## Expérience 2: La figurine animée

L'objectif initial était de travailler sur une scène animée avec la force de Noël. Cette fonctionnalité a été développeé via THREE JS et son implémentation dans Vue.


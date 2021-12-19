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
L'import du modèle a été plus compliquée que prévue dans Vue JS. J'ai du utiliser un framework 
```sh
three-gltf-loader
```
afin de charger le modèle au format GLTF. J'ai également utilisé le framework 
```sh
file-loader
```
afin de faciliter la gestion des chemins de fichiers.

## Expérience 3: Le Photomaton !

C'est la première expérience sur laquelle j'ai travaillé, mais elle me semblait pas assez complexe. C'est pourquoi j'ai choisi d'ajouter deux expérences supplémentaires pour faire de mon site une expérience à part entière doté de mini-expériences. 
L'idée est de prendre un photo puis d'ajouter un filtre dessus aux couleurs de la Force de Noël.  L'image filtre est en fait un élément caché de la page web que le script vient récupérer pour la fusionner avec l'image courante de la caméra.
Il s'agit d'une solution assez simple mais j'ai mis beaucoup de temps avant de la trouver.  Elle fonctionne sur PC mais le filtre n'est pas adapté aux téléphone. Après réflexions, j'aurais du faire un deuxième image filtre pour téléphone et changer l'image en fonction de la taille de l'écran.

## Conclusion de mon travail

Je suis super heureux d'avoir pu concrétiser ce projet très personnel ! Le site fonctionne bien !
Je pense avoir pris la bonne décision en ayant fait un site front doté de plusieurs mini-expériences, car ceci m'a permis de proposer à la fois un site web front, mais aussi des fonctionnalités web modernes.

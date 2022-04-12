Map'r, application web de carte interactive avec géolocalisation

# Installation du projet

    Avec Xampp/MAMP

- Mettez le dossier du projet dans C:/xampp/htdocs

- Dans votre serveur, si vous êtes sur localhost, tapez localhost/phpmyadmin dans la barre de recherche du navigateur

- Créez une nouvelle base et nommez-la « map’r » (au besoin changez le login et mot de passe dans connectDB), importez script.sql
(le script se trouve dans model).

- Tapez localhost dans la barre de recherche du navigateur et cliquez sur le dossier du projet pour le lancer.

- Dans le fichier script/map.js, dans les fonctions addMarker(), removeMarker() et dans la requête post servant à récupérer les marqueurs,
modifiez le chemin si besoin.
Par défaut, les chemins sont :
- "/Map’r/model/fetchMarkersDB.php"
- "/Map’r/model/addMarkerDB.php"
- "/Map’r/model/removeMarkerDB.php"


# FONCTIONNALITES : ---------------------------------------------------------

- Zoomer/dézoom sur la carte, créer et enregistrer un marqueur sur un endroit

- Différents templates de cartes au choix de l'utilisateur (rues, clair, extérieur, satellite, sombre)

- Les marqueurs seront déplaçables et retirables. Choix de les afficher ou non

- Affichage des gares d'Île-de-France sous forme de clusters de marqueurs, des lignes de transports et des arrondissements parisiens

- Calcul de temps de trajet entre deux points (saisie des adresses des deux points)

- Recherche d'adresses
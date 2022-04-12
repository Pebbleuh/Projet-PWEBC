
//Ajout de l'objet carte
var map = L.map("map").setView([48.92382049560547, 2.4195966720581055], 13);
var myPins = L.layerGroup([]);

//Jeton d'accès pour avoir les fonctionnalités de MapBox
L.mapbox.accessToken =
	"pk.eyJ1IjoianV6ZTAiLCJhIjoiY2t6a2N3ZGh6MjM1ODJubnlnbnZiNmlyMCJ9.r8kb2tGM7yKRdBhIr9p3Wg";

	//Ajout du fond de carte
L.tileLayer(
	"https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
	{
		attribution:
			'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: "mapbox/streets-v11",
		tileSize: 512,
		zoomOffset: -1,
		accessToken:
			"sk.eyJ1IjoianV6ZTAiLCJhIjoiY2t6bGxxcThwMHJqZTJ2bnowaTVueDdtayJ9.9FMsbuONeoPhp8ZIxXfr8A",
	}
).addTo(map);

//Ajout des différents fonds de carte
var baseMaps = {
	Rues: L.mapbox.styleLayer("mapbox://styles/mapbox/streets-v11").addTo(map),
	Clair: L.mapbox.styleLayer("mapbox://styles/mapbox/light-v10"),
	Extérieur: L.mapbox.styleLayer("mapbox://styles/mapbox/outdoors-v11"),
	Satellite: L.mapbox.styleLayer("mapbox://styles/mapbox/satellite-v9"),
	Sombre: L.mapbox.styleLayer("mapbox://styles/mapbox/dark-v10"),
};

//Crée un cluster de marker pour les afficher au fur et à mesure du zoom sur la carte
var markersCluster = L.markerClusterGroup();

//Active les popups
var popup = L.popup();

const idU = $("#IdUser").text();

// Récupère marqueurs de l'utilisateur en BDD et les affiche
$.post("/Map'r/model/fetchMarkersDB.php", { idUser: idU }, (marqueurs) => {
	const marqueursJSON = JSON.parse(marqueurs);
	$.each(marqueursJSON, (index, marqueur) => {
		const latlng = new L.LatLng(
			parseFloat(marqueur.LatitudeLieu),
			parseFloat(marqueur.LongitudeLieu)
		);

		const marker = L.marker(latlng, {
			draggable: true,
		})
			.addTo(map)
			.addTo(myPins)
			.bindPopup(
				"Vous êtes aux coordonnées GPS : " +
					latlng.toString() +
					"<br>" +
					btn_remove_marker
			);
		// myPins.addTo(map);
		marker.on("popupopen", removeMarker);
	});
});

//Bouton permettant de supprimer un marker de la carte 
const btn_remove_marker =
	'<button id="btn_remove" class="btn is-danger">Supprimer</button>';


	/**
	 * Ajoute un marqueur sur la carte au click et l'ajout également à la base de donnée
	 * @param {evènement du click} e 
	 */
function addMarker(e) {

	const marker = new L.marker(e.latlng, {
		draggable: true,
	})
		.addTo(map)
		.addTo(myPins)
		.bindPopup(
			"Vous êtes aux coordonnées GPS : " +
				e.latlng.toString() +
				"<br>" +
				btn_remove_marker
		);
	myPins.addTo(map);

	const { lat, lng } = e.latlng;

	// Ajoute marqueur dans DB
	$.post(
		"/Map'r/model/addMarkerDB.php",
		{ long: lng, lat: lat, idUser: idU }, // données passées en POST au fichier mapDB.php
		(response) => {
			console.log(response);
		}
	);

	// event remove marker
	marker.on("popupopen", removeMarker);
}

/**
 * Permet de supprimer un marker de la carte et de la base de donnée
 */
function removeMarker() {
	const marker = this;
	const { lat, lng } = marker.getLatLng();
	const btn = $("#btn_remove");
	btn.on("click", function () {
		map.removeLayer(marker);
		$.post(
			"/Map'r/model/removeMarkerDB.php",
			{ lat: lat, long: lng, idUser: idU },
			(response) => {
				console.log(response);
			}
		);
	});
}

map.on("click", addMarker);

// Permet d'ajouter les marker du geoJSON (MarkerCluster) sur les gares d'IDF. Ajoute également leur popup
const geoJsonGroupGares = L.geoJson(emplacementsGaresIDF, {
	pointToLayer: function (feature, latlng) {
		return L.marker(latlng);
	},
	onEachFeature: function (feature, layer) {
		if (feature.properties && feature.properties.nom_lda) {
			layer.bindPopup(
				feature.properties.nom_lda + "<br>" + feature.properties.res_com
			);
		}
	},
});
markersCluster.addLayer(geoJsonGroupGares);
//map.addLayer(markersCluster);


/**
 * Créer les LineStrings représentant les transports d'IDF sur la carte 
 * @returns les LineStrings de lignes de transports et leurs popups
 */
function createTransports() {
	return new L.geoJson(transportsIDF, {
		pointToLayer: function (feature, latlng) {
			console.log(feature.properties.colourweb_hexa);
			return L.lineString(latlng);
		},
		style: function(feature) {
			return {color: "#" + feature.properties.colourweb_hexa};
		}, 
		onEachFeature: function (feature, layer) {
			if (feature.properties && feature.properties.res_com != "TER") {
				layer.bindPopup("<b>" + feature.properties.res_com +"</b> <br>" + "<img src=\"" + feature.properties.picto_final + "\"/>");
			} else {
				layer.bindPopup("<b>" + feature.properties.res_com +"</b> <br>" + "<img src=\"./images/Logo_TER.png\"/>");
			}
		},
	});
}


/**
 * Créer les polygones représentant les arrondissements parisiens
 * @returns Les polygones des arrondissements parisiens et leurs popups
 */
function createArrondissements() {
	return new L.geoJson(arrondissementsParis, {
		pointToLayer: function (feature, latlng) {
			//markersCluster.addLayer(L.marker(latlng));
			return L.marker(latlng);
		},
		onEachFeature: function (feature, layer) {
			if (
				feature.properties &&
				feature.properties.l_aroff &&
				feature.properties.l_aroff
			) {
				layer.bindPopup(
					"<h3>" +
						feature.properties.l_ar +
						"<h3>" +
						"<br>" +
						feature.properties.l_aroff
				);
			}
		},
	});
}

//Ajoute les overlays précédemment créés à la map
var overlayMaps = {
	"Gares d'île-de-France": markersCluster,
	"Transports d'île-de-France": createTransports(),
	"Arrondissements parisiens": createArrondissements(),
	"Mes pins": myPins,
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

// L.control.layers(overlayMaps).addTo(map);

//Ajout de la zone de recherche
map.addControl(L.mapbox.geocoderControl('mapbox.places', {
    autocomplete: true
}));

//Se géolocaliser et afficher un marker
if ("geolocation" in navigator) {
	navigator.geolocation.getCurrentPosition((position) => {
		const latlng = [position.coords.latitude, position.coords.longitude];
		map.panTo(latlng);
		L.marker(latlng).bindPopup("Vous êtes aux coordonnées : " + latlng + btn_remove_marker).addTo(map);
	});
}




// API citymapper pour les itinéraires

// Dialog box jQuery UI (pour le temps d'un itinéraire)
$(function () {
    $("#dialog").dialog({
        autoOpen: false, // ne s'ouvre pas automatique à son initialisation
        title: "Calcul itinéraire",
    });
    $("#openDialog").click(function () {
        $("#dialog").dialog("open");
    });
});

//Envoi d'une promesse afin de récupérer les adresses entrées dans les input
//Promesse de résultat: garantie qu’ici la requête ajax va renvoyer quelque chose
const getCoordonnees = function (adresse) {
    return new Promise((resolve) => { // fonction fléchée équivalent à function(resolve) {}
        $.ajax ({
            method: "get",
            url: "https://api-adresse.data.gouv.fr/search/",
            data: {
                q: adresse,
                limit: 1, // un seul résultat pour l'adresse rentrée
            },
            success: function (resultat) {
                const coords = resultat.features[0].geometry.coordinates; // récupérer les coordonnées selon la struct de l'API
                // Latitude en 1 et longitude en 0
                //Fonction resolve : on y passe le résultat attendu : les coordonnées
                resolve({ latitude: coords[1], longitude: coords[0] });
            },
        });
    });
};

//Envoi d'une promesse contenant les adresses afin d'obtenir le temps de trajet
const getTempsTrajet = function (depart, arrivee) {
    return new Promise((resolve) => { 
        // Convertit coordonnées en string pour l'API qui les demande sous cette forme
        const strDepart =
            depart.latitude.toString() + "," + depart.longitude.toString();
        const strArrivee =
            arrivee.latitude.toString() + "," + arrivee.longitude.toString();
        $.ajax ({
            method: "get",
            // l'api nécessite désactivation du CORS
            url: "https://cors-yusa.herokuapp.com/https://api.external.citymapper.com/api/1/traveltimes",
            data: {
                start: strDepart, // Format : "51.559098,0.074503"
                end: strArrivee,
            },
            headers: { // clé Citymapper pour utiliser l'API
                "Citymapper-Partner-Key": "X0pgh91Y3v9hbIXMf0h8ZM4qUQcLF2rj"
            },
            success: function(resultat) {
                resolve(resultat); // résolution de la promesse : on lui passe le résultat = les coordonnées
            },
        });
    });
};

const boutonTempsTrajet = $("#tempsTrajet");

//Récupération du résultat de la requête pour obtenir le temps de trajet
//Fonction asynchrone attendant (await) les requêtes ajax de getCoordonnees et getTempsTrajet
boutonTempsTrajet.on("click", async function() {
    const coordonneesDepart = await getCoordonnees(
        $("#adresseSrc").val()
    );

    const coordonneesArrivee = await getCoordonnees(
        $("#adresseDest").val()
    );

    const tempsTrajet = await getTempsTrajet(
        coordonneesDepart,
        coordonneesArrivee
    );

    //Affichage du résultat (temps à pieds + transport) dans la boîte de dialogue
    $("#affichageTempsTrajet").html(
        "Temps de trajet à pied : " +
        tempsTrajet.walk_travel_time_minutes.toString() +
        " minutes" +
        "<br />" +
        "Temps de trajet via transport : " +
        tempsTrajet.transit_time_minutes.toString() +
        " minutes");
});
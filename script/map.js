
//Ajout de l'objet carte
var map = L.map('map').setView([48.92382049560547, 2.4195966720581055], 13);


//Ajout du fichier contenant les tracés des transports ferrés d'île-de-France
var transports = L.geoJSON(transportsIDF,{
    pointToLayer : function(feature, latlng) {
        return L.marker(latlng);
}}).addTo(map);


//Ajout des gares d'île-de-France, à modifier pour afficher les noms des gares uniquement au clic sur la carte
// var emplacementsG = L.geoJSON(emplacementsGaresIDF, {
//     pointToLayer : function(feature, latlng) {
//         return L.marker(latlng);
//     }
// }).addTo(map);

 var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(map);
// }

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.nom_lda) {
        layer.bindPopup(feature.properties.nom_lda + "<br>" +  feature.properties.res_com);
    }
}

function onEachFeatureT(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.res_com) {
        layer.bindPopup(feature.properties.res_com);
    }
}

L.geoJSON(emplacementsGaresIDF, {
    onEachFeature: onEachFeature
}).addTo(map);

L.geoJSON(transportsIDF, {
    onEachFeature: onEachFeatureT
}).addTo(map);


//Modifier la couleur des lignes pour corréler avec la réalité.

// L.geoJSON(transportsIDF, {
//     style: function(feature) {
//         let myStyle;
//         array.forEach(feature => {
//             myStyle = {"color": feature.properties.colourweb_hexa};
//         });
//     }
// }).addTo(map);


//Jeton d'accès pour avoir les fonctionnalités de MapBox
L.mapbox.accessToken = 'pk.eyJ1IjoianV6ZTAiLCJhIjoiY2t6a2N3ZGh6MjM1ODJubnlnbnZiNmlyMCJ9.r8kb2tGM7yKRdBhIr9p3Wg';
//Ajout du fond de carte
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'sk.eyJ1IjoianV6ZTAiLCJhIjoiY2t6bGxxcThwMHJqZTJ2bnowaTVueDdtayJ9.9FMsbuONeoPhp8ZIxXfr8A'
}).addTo(map);

//Ajout des différents fonds de carte
L.control.layers({
    'Rues': L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11').addTo(map),
    'Clair': L.mapbox.styleLayer('mapbox://styles/mapbox/light-v10'),
    'Extérieur': L.mapbox.styleLayer('mapbox://styles/mapbox/outdoors-v11'),
    'Satellite': L.mapbox.styleLayer('mapbox://styles/mapbox/satellite-v9')
}).addTo(map);

//Ajout de la zone de recherche
map.addControl(L.mapbox.geocoderControl('mapbox.places', {
    autocomplete: true
}));


//Se géolocaliser
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) =>{
        const latlng = [position.coords.latitude, position.coords.longitude];
        map.panTo(latlng);
        L.marker(latlng).addTo(map);
    })
}

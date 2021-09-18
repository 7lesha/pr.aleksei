'use strict';

let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 53.9, lng: 27.5},
    zoom: 12,
  });
}

// let map;
// function initMap() {
//   const localContextMapView = new google.maps.localContext.LocalContextMapView({
//     element: document.getElementById("map"),
//     placeTypePreferences: [
//       { type: "restaurant" },
//       { type: "tourist_attraction" },
//     ],
//     maxPlaceCount: 24,
//   });

//  map = localContextMapView.map;
//   map.setOptions({
//     center: {lat: 53.9, lng: 27.5},
//     zoom: 14,
//   });
// }
import '../styles/map.css';

function initMap() {
  const map = new google.maps.Map(document.getElementById('.map'), {
    center: {
      lat: 53.9, lng: 27.5,
    },
    zoom: 12,
  });
}
import '../styles/map.css';

/* global google */

// eslint-disable-next-line no-unused-vars
window.initMap = function initMap() {
  // eslint-disable-next-line no-new
  new google.maps.Map(document.querySelector('.map'), {
    center: {
      lat: 53.9, lng: 27.5,
    },
    zoom: 12,
  });
};

const apiScript = document.createElement('script');
apiScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDyFSLlg94-paC238gd7OQKlE_LTv0SK3M&callback=initMap&v=weekly';
document.body.appendChild(apiScript);
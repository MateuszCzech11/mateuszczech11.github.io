window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map');
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    map.locate({ setView: true, maxZoom: 19 });

    map.on('locationfound', function (e) {
        var marker = L.marker([e.latitude, e.longitude]).addTo(map);
    });

    map.on('locationerror', function (e) {
        alert("Location access denied.");
    });
});

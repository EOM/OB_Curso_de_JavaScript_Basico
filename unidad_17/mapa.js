function initMap() {
    const mapa = new google.maps.Map(document.getElementById('mapa'), {
        center: { lat: 40.7128, lng: -74.0060 }, // Nueva York, Estados Unidos
        zoom: 8 // Nivel de zoom inicial
    });
    const lugar1 = new google.maps.Marker({
        position: { lat: 51.5074, lng: -0.1278 }, // Londres, Reino Unido
        map: mapa,
        title: 'Lugar 1 - Londres'
    });
    const lugar2 = new google.maps.Marker({
        position: { lat: -33.8688, lng: 151.2093 }, // Sídney, Australia
        map: mapa,
        title: 'Lugar 2 - Sídney'
    });
    const lugar3 = new google.maps.Marker({
        position: { lat: 48.8566, lng: 2.3522 }, // París, Francia
        map: mapa,
        title: 'Lugar 3 - París'
    });
}

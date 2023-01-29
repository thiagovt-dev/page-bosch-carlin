function initMap(){
    const carlin = {lat: -5.504258920371249, lng: -47.45161523883757};
    const map = new google.maps.Map(document.getElementById('map'), {zoom: 16, center: carlin});
    const marker = new google.maps.Marker({position: carlin, map: map});
}
window.initMap = initMap;
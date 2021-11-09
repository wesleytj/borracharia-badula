window.onload = function(){
    var map;
    function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-29.6846,-51.1419),
            scrollwheel: true,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        map = new google.maps.Map(document.getElementById("mapa"), mapProp);
    }

    initialize();
}
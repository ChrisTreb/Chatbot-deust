window.getAdress = function(mapCity) {

    var url = "https://nominatim.openstreetmap.org/search/" + mapCity + "?format=json&addressdetails=1&limit=1&polygon_svg=1";
    fetch(url).then(handleResponse);
    
    function handleJson(data) {

        if(data[0] != undefined){
    
            console.log(data);
            var lat = data[0].lat;
            var lon = data[0].lon;

            var coord = 'Coordonées de '+ mapCity + ', latitude: ' + lat + ', longitude: ' + lon;

            window.createMessage('me', coord);

            $("#mapid").slideDown();
            $("#close-map").slideDown();

            // Display Map //

            function displayMap() {
                var mymap = L.map('mapid').setView([lat, lon], 13);

                L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                    maxZoom: 18,
                    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                    id: 'mapbox.streets'
                }).addTo(mymap);

                var marker = L.marker([lat, lon]).addTo(mymap);
                marker.bindPopup("<b>"+ mapCity +"</b>").openPopup();
            }

            

            displayMap();

            window.scrollToBottom();
            setTimeout(function(){ window.scrollBy(0, window.innerHeight); }, 1000);

        } else {
            window.createMessage("me", "Je ne trouve pas la ville, désolé.");
            window.scrollToBottom();
        } 

    }
    
    function handleResponse(response) {
        response.json().then(handleJson);
    }
}

// Function to close the map and reload page

$("#close-map").click(function(){
    location.reload();
});

mapboxgl.accessToken = 'pk.eyJ1IjoicGFsYWstZHciLCJhIjoiY2tyN25kdWpzMGtpYTJzcXJkaXo0bHhuaSJ9.hJNlXcw2zLubvp7gshk7Eg'

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true});

function successLocation(position){
    settingMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
    settingMap([77.22, 28.72])
}

function settingMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 9
    });
    map.addControl(new mapboxgl.NavigationControl());

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
      });
      map.addControl(directions, 'top-left');
}
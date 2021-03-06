function geoFindMe() {

  const status = document.querySelector('#status');
  const mapLink = document.querySelector('#map-link');

  mapLink.href = '';
  mapLink.textContent = '';

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = '';
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    latitudeHours = Math.round(latitude);
    latitudeMins = Math.round((latitude - latitudeHours)*60);
    latitudeSecs = Math.round(((latitude - latitudeHours)*60)-latitudeMins*60);
    mapLink.textContent = `Degrees: ${latitudeHours}, Minutes: ${latitudeMins}, Seconds: ${latitudeSecs}`;
    let dot = document.getElementById('position');
    let map = document.getElementById('map');
    
  }

  function error() {
    status.textContent = 'Unable to retrieve your location';
  }

  if(!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }

}

document.querySelector('#find-me').addEventListener('click', geoFindMe);

// For modal
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

//For the Google map
// Initialize and add the map
function initMap() {
  // My location
  const myLoc = { lat: 20.2944, lng: 85.743 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLoc,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: myLoc,
    map: map,
  });
}
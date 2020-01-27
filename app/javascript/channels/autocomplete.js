document.addEventListener("DOMContentLoaded", autocomplete);

function autocomplete() {
  let options = {
    componentRestrictions: { country: "je" }
  };

  //GO/ autocomplete

  let findName = document.getElementById("property_address");
  let autocomplete = new google.maps.places.Autocomplete(findName, options);
  google.maps.event.addListener(autocomplete, "place_changed", function() {
    let place = autocomplete.getPlace();
    findName.value = place.formatted_address;
  });
}

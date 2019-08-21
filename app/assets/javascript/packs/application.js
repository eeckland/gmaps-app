// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

//= require jquery
//= require jquery_ujs


//require("@rails/ujs").start()
//require("turbolinks").start()
//require("@rails/activestorage").start()
//require("channels")

//= require activestorage
//require turbolinks
//= require_tree

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

$(document).ready(function (){

    function initialize() {
      var mapOptions = {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
      };
        
      var map = new google.maps.Map(document.getElementById('map-canvas'), 
                mapOptions);    
    }
      
    google.maps.event.addDomListener(window, 'load', initialize);
});
// "getElementById('map-canvas')" goes into index.html.erb to match with the "id="map-canvas""

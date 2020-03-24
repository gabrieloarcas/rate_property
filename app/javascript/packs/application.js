// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");

//import rating files
import "../../assets/javascripts/jquery.raty";
import "../../assets/javascripts/ratyrate.js.erb";

//import easy-autocomplete and custom autocomplete file
import 'easy-autocomplete'
import './autocomplete'

//import bootstrap
import 'bootstrap'
import '../stylesheets/application'
import './carousel.js'

//import navbar overlay effect
import './navbar_overlay.js'

//import custom scroll
import 'jquery-mousewheel'
import 'malihu-custom-scrollbar-plugin'


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

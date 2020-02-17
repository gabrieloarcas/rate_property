//fix the turbolinks for carousel
document.addEventListener("turbolinks:load", function() {
  $('.carousel').carousel({ interval: 3000 })
});

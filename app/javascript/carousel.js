//fix the turbolinks for carousel
$(document).on("turbolinks:load", function() {
  $(".carousel").carousel({ interval: 3000 });
});

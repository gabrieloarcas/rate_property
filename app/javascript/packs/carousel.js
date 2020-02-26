document.addEventListener("DOMContentLoaded", function() {
  $(".carousel").carousel({ interval: 1000 });
  $(document).ready(function() {
    $("h5").click(function() {
      $(this).hide();
      $(".carousel").carousel({ interval: 1000 });
    });
  });
});

$(document).ready(function() {
  $("h5").click(function() {
    $(this).hide();
    $(".carousel").carousel({ interval: 1000 });
  });
});

$(document).on("turbolinks:load", function() {
  $(".carousel").carousel({ interval: 3000 });
});

// document.addEventListener("DOMContentLoaded", speedo);
// function speedo() {
//   let carousel = document.querySelector(".carousel");
//   carousel.style.backgroundColor = "red";
//   carousel.carousel({ interval: 3000 });

//   console.log("write this");
//   carousel.style.backgroundColor = "red";
// }

//fix the turbolinks for carousel

// $(".carousel").carousel({
//   interval: 2000
// });

// document.addEventListener("DOMContentLoaded", function() {
//   document.addEventListener("turbolinks:load", function() {
//     console.log($(".carousel"));
//     $(".carousel").carousel({ interval: 3000 });
//     console.log("this works as well");
//   });
// });

// document.addEventListener("DOMContentLoaded", function() {
//   document.addEventListener("turbolinks:load", function() {
//     console.log($(".carousel"));
//     $(".carousel").carousel({ interval: 3000 });
//     console.log("this works as well");
//   });
// });

// $(document).on("page:load ready", function() {
//   console.log("write this");
// });

// document.addEventListener("DOMContentLoaded", rreload);

// function rreload() {
//   $(document).on("click", function() {
//     console.log("write this");
//     $(".carousel").style.backgroundColor = "red";
//   });
// }

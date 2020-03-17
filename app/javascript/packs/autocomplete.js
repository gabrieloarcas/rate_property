document.addEventListener("DOMContentLoaded", autocomplete);

function autocomplete() {
  $input = $("[data-behavior='autocomplete']");

  var options = {
    getValue: "address",
    url: function(phrase) {
      return "/search.json?q=" + phrase;
    },
    categories: [
      { listLocation: "properties", header: "<strong>Properties</strong>" }
    ],
    list: {
      onChooseEvent: function() {
        var url = $input.getSelectedItemData().url;
        console.log(url);
        $input.val("");
        window.location.href = url;
      }
    }
  };

  $input.easyAutocomplete(options);
}

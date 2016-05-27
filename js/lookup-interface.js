var Lookup = require('./../js/lookup.js').Lookup;

$(document).ready(function(){

  var newLookup = new Lookup();

  $('#input').submit(function(event){
    event.preventDefault();

    var userNameInput = $('#userInput').val();
    $('#userInput').val("");

    var displayFunction = function(response) {
      $('#gh_repoNameDes').empty();
      var maxLength = response.length;
      for (var i = 0; i < maxLength; i++) {
        $('#gh_repoNameDes').append("<li>Repository name:<span class='boldText'> " + response[i].name + '</span><br>' + 'Description:  '+ response[i].description + '</li>');
      }
    };

    newLookup.getRepos(userNameInput, displayFunction);

    $('#output').show();
    $('#gh_username').text(userNameInput);

  });
});

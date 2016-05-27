var Lookup = require('./../js/lookup.js').Lookup;

$(document).ready(function(){
  $('#input').submit(function(event){
    event.preventDefault();

    var userInput = $('#userInput').val();
    $('#userInput').val("");

    var newLookup = new Lookup(userInput);

    newLookup.getRepos();
    $('#output').show();
    $('#gh_username').text(userInput);

  });
});

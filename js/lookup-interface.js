var Lookup = require('./../js/lookup.js').Lookup;

$(document).ready(function(){
  $('#input').submit(function(event){
    event.preventDefault();

    var userNameInput = $('#userInput').val();
    $('#userInput').val("");

    var newLookup = new Lookup(userNameInput);

    newLookup.getRepos();
    $('#output').show();
    $('#gh_username').text(userNameInput);


  });
});

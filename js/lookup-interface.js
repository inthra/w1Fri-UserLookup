var Lookup = require('./../js/lookup.js').Lookup;

$(document).ready(function(){

  var newLookup = new Lookup();

  $('#input').submit(function(event){
    event.preventDefault();

    var userNameInput = $('#userInput').val();
    $('#userInput').val("");

    newLookup.getRepos(userNameInput);
    
    $('#output').show();
    $('#gh_username').text(userNameInput);


  });
});

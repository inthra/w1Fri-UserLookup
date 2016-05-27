var Lookup = require('./../js/lookup.js').Lookup;

$(document).ready(function(){
  $('#input').submit(function(event){
    event.preventDefault();
    var userInput = $('#userInput').val();

    var newLookup = new Lookup(userInput);
    console.log(newLookup.username);
  });
});

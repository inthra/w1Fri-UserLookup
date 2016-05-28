var Lookup = require('./../js/lookup.js').Lookup;
var emptyBeforeDisplay = require('./../js/clearOutput.js').emptyBeforeDisplay;

$(document).ready(function(){

  var newLookup = new Lookup();

  $('#input').submit(function(event){
    event.preventDefault();

    var userNameInput = $('#userInput').val();
    $('#userInput').val("");

    var displayFunction = function(response) {
      emptyBeforeDisplay();
      $('#gh_username').text(response[0].owner.login);
      $('#gh_avatar').append("<img id='profileImg' src='" + response[0].owner.avatar_url + "' alt='Profile image' />");

      var maxLength = response.length;
      for (var i = 0; i < maxLength; i++) {
        var createdAt = moment(response[i].created_at).format("ddd, MMM Do YYYY, h:mm:ss a");
        $('#gh_repoNameDes').append("<li>Repository name: <span class='boldText'>" + response[i].name + '</span><br><span>Created at: </span>' + createdAt + '<br>' + 'Description: '+ response[i].description + '</li>');
      }
    };

    newLookup.getRepos(userNameInput, displayFunction);

    $('#output').show();

  });
});

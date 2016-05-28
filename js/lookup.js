var apiKey = require('./../.env').apiKey;
var ghLink = 'https://api.github.com/users/';
var emptyBeforeDisplay = require('./../js/clearOutput.js').emptyBeforeDisplay;

exports.Lookup = function(){
  this.username = undefined;
};

exports.Lookup.prototype.getRepos = function(username, display){
  $.get(ghLink + username + '/repos?access_token=' + apiKey).then(function(response){
    display(response);
  }).fail(function(error){
    emptyBeforeDisplay();
    $('#gh_username').text(error.responseJSON.message);
  });
};

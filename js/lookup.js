var apiKey = require('./../.env').apiKey;
var ghLink = 'https://api.github.com/users/';

exports.Lookup = function(){
  this.username = undefined;
};

exports.Lookup.prototype.getRepos = function(username, display){
  $.get(ghLink + username + '/repos?access_token=' + apiKey).then(function(response){
    display(response);
  }).fail(function(error){
    $('#gh_avatar').empty();
    $('#gh_repoNameDes').empty();
    $('#gh_username').text(error.responseJSON.message);
  });
};

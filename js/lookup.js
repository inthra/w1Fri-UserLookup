var apiKey = require('./../.env').apiKey;
var ghLink = 'https://api.github.com/users/';

exports.Lookup = function(){
  this.username = undefined;
};

exports.Lookup.prototype.getRepos = function(username){
  $.get(ghLink + username + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response[0].name);
    console.log(response[0].description);
    $('#gh_repoName').text(response[0].name);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

var apiKey = require('./../.env').apiKey;

exports.Lookup = function(username){
  this.username = username;
};

exports.Lookup.prototype.getRepos = function(){
  $.get('https://api.github.com/users/inthra/repos?access_token=' + apiKey).then(function(response){
    console.log(response[0].name);
    console.log(response[0].description);
    $('#gh_repoName').text(response[0].name);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

var apiKey = require('./../.env').apiKey;
var ghLink = 'https://api.github.com/users/';

exports.Lookup = function(){
  this.username = undefined;
};

exports.Lookup.prototype.getRepos = function(username){
  $.get(ghLink + username + '/repos?access_token=' + apiKey).then(function(response){
    var maxLength = response.length;
    for (var i = 0; i < maxLength; i++) {
      $('#gh_repoNameDes').append("<li>Repository name:<span class='boldText'> " + response[i].name + '</span><br>' + 'Description:  '+ response[i].description + '</li>');
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

var apiKey = require('./../.env').apiKey;

exports.Lookup = function(username){
  this.username = username;
}

exports.Lookup.prototype.getRepos = function(){
  $.get('https://api.github.com/users/inthra?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

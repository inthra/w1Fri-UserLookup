var apiKey = require('./../.env').apiKey;

exports.Lookup = function(username){
  this.username = username;
}

exports.Lookup.prototype.retrieveInfo = function() {
  return ;
}

var api = require('./api.js');
exports.getUser = function (id){
   api.getUser(id)
}

exports.saveUser = function(user) {
    api.saveUser(user);
}
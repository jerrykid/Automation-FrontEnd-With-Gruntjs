var api = require('./api.js');
exports.getUser = function (id){
   api.getUser(id)
}

exports.saveUser = function(user) {
    api.saveUser(user);
}

exports.getFormattedUser = function(id,callbackFortmatted) {
    var user = api.getUser(id);
    
    var formated;
    if(user == '1000')
    {
       formated = callbackFortmatted(user);       
    }
    else
    {
       formated = callbackFortmatted(user);
    }   

    return "Hello " + formated;    
}
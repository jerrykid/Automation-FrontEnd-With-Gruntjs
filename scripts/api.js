function post(url)
{
    var https = require('https');
    var options = {
        host: 'api',
        path: url,
        method: 'POST'        
    };
    var str = '';
    https.request(options, function (response) {
        response.on('data', function (data) {
            str += data;
        });
        
        response.on('end', function () {
            console.log(str);            
        });
        
        response.on('error', function (error) {
            console.log(error);            
        });
    });    
}  
    
exports.saveUser = function (user){    
    post("/saveUser",user);
}

exports.getUser = function (user){    
    post("/getUser",user);
}
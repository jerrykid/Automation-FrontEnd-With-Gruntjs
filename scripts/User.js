var DataBase = require('./DataBase.js');
exports.getUser = function (info, callback){
    var https = require('https');
    var options = {
        host: 'api',
        path: '/getUser',
        method: 'GET'        
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
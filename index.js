exports.sanitize = function (word) {
    console.log('Run Sanitize');
    return word.toLowerCase().replace(/-/, ' ');
};

exports.tokernize = function (word) {
    return word.split(' ');
};

exports.info = function (callback) {
    var https = require('https');
    var options = {
        host: 'api.github.com',
        path: '/repos/sayanee/build-podcast',
        method: 'GET',
		headers:{
			'user-agent':'sayanee'
		}
    };
    var str = '';
    https.request(options, function (response) {
        response.on('data', function (data) {
            str += data;
			//console.log(data);
        });
        
        response.on('end', function () {
            //console.log(str);
            callback(JSON.parse(str))
        });
        
        response.on('error', function (error) {
            //console.log(error);
            callback(error);
        });
    }).end();
}

exports.infoLanguage = function(infoFunc, callback){
	infoFunc(function(reply){
		callback('Language is ' + reply.language);
	})
}



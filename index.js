exports.sanitize = function (word) {
    console.log('Run Sanitize');
    return word.toLowerCase().replace(/-/, ' ');
};

exports.tokernize = function (word) {
    return word.split(' ');
};
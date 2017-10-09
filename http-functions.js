module.exports = function getHTML (options, callback) {
   var https = require('https');
  /* Add your code here */
  var requestOptions = options
  var output = '';
  https.get(requestOptions, function (response) {
  response.setEncoding('utf8');
  response.on('data', function (data) {
    output += data;
  });
  response.on('end', function() {
    callback(output);
  });
});
};

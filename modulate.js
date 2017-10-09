function getAndPrintHTML (options) {
var https = require('https')
  var output = '';
  https.get(requestOptions, function (response) {
  response.setEncoding('utf8');
  response.on('data', function (data) {
    output += data;
  });
  response.on('end', function() {
    console.log(output)
  });

});
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};
getAndPrintHTML(requestOptions);

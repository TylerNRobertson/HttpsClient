var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  var output = ''
  output = html.toUpperCase()
  return output;
}

getHTML(requestOptions, printUpperCase);

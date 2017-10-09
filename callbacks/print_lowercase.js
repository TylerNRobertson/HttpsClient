var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printUpperCase (html) {
  var output = ''
  output = html.toLowerCase()
  console.log(output);
}

getHTML(requestOptions, printUpperCase);

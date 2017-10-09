var getHTML = require('../http-functions');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};
var map = {
  ck: 'x',
  you: 'j00',
  er: '0r',
  a: 4,
  e: 3,
  l: 1,
  o: 0,
  s: 5,
  t: 7
};
function print1337 (html) {
  var output = html
  for (var element in map) {
    var key = new RegExp(element, 'gi')
    output = output.replace(key, map[element]);
  }
  console.log(output);
}
getHTML(requestOptions, print1337);

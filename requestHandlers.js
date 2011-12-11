// Add querystring module to get the "text" from the body
// of the post request.
var querystring = require("querystring");

function start( response, postData ) {
  console.log( "Request handler 'start' was called." );
  
  // Create html form
  var body= '<html>';
  body += '<head>';
  body += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'
  body += '</head>';
  body += '<body>';
  body += '<form action="/upload" method="post">';
  body += '<textarea name="text" rows"20" cols="60"></textarea>';
  body += '<input type="submit" value="Submit text" />';
  body += '</form>'
  body += '</body>';
  body += '</html>';

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();

}

function upload( response, postData ) {
  console.log( "Request handler 'upload' was called." );
  
  response.writeHead(200, {"Content-Type": "text/plain"});
  // Only display the post data "text" not the entire body.
  response.write( "You've send: " + querystring.parse(postData).text );
  response.end();  
}

exports.start = start;
exports.upload = upload;

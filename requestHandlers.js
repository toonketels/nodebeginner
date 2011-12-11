// Would be better to not dump content in request handler,
// but instead pass it to a controller with views and models

function start(response) {
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
  
  // Send response
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();

}

function upload(response) {
  console.log( "Request handler 'upload' was called." );
  
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Upload I tell you");
  response.end();  
}

exports.start = start;
exports.upload = upload;

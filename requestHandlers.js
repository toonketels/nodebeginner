var querystring = require("querystring");
// Add File System module.
var fs = require( "fs" );


function start( response, postData ) {
  console.log( "Request handler 'start' was called." );
  
  // Create html form
  var body= '<html>';
  body += '<head>';
  body += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'
  body += '</head>';
  body += '<body>';
  body += '<form action="/upload" enctype="multipart/form-data" method="post">';
  // Changed text to file input type
  body += '<input type="file" name="upload" />';
  body += '<input type="submit" value="Upload file" />';
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

// Add show requestfunction which will display
// a png file named nodejs.png from /tmp folder.
function show( response, postData ) {
  console.log( "Request handerl 'show' was called." );
  // Async file handling, we pass a callback function which will
  // be executed when file is read
  fs.readFile( '/tmp/nodejs.png', 'binary', function( error, file ) {
    if( error ) {
      console.log( 'Error occured: ' + error );
      response.writeHead( 500, { 'Content-Type': 'text/plain' });
      response.write( error, '\n' );
      response.end();
    } else {
      console.log( "File is being displayed" );
      response.writeHead( 200, { 'Content-Type': 'image/png' } );
      response.write( file, 'binary' );
      response.end();
    }
  });
}

exports.start = start;
exports.upload = upload;
exports.show = show;
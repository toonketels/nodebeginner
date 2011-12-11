var querystring = require("querystring");
var fs = require( "fs" );
// Add the formidable module
var formidable = require( "formidable" );

// Accept request as argument
function start( response, request ) {
  console.log( "Request handler 'start' was called." );
  
  var body= '<html>';
  body += '<head>';
  body += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'
  body += '</head>';
  body += '<body>';
  body += '<form action="/upload" enctype="multipart/form-data" method="post">';
  body += '<input type="file" name="upload" />';
  body += '<input type="submit" value="Upload file" />';
  body += '</form>'
  body += '</body>';
  body += '</html>';

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();
  
}

// Update the upload handling using formidable.
function upload( response, request ) {
  console.log( "Request handler 'upload' was called." );
  
  // Use formidable, IncomingForm is constructor function.
  var form = new formidable.IncomingForm();
  console.log( 'About to parse' );
  // Parse the request
  form.parse( request, function( error, fields, files ) {
    console.log( 'Parsing done' );
    // Rename file in a synchronous way - doesn't take much time so
    // allowed to be blocking.
    // A async function is also available.
    fs.renameSync( files.upload.path, '/tmp/test.png' );
    
    // Create the response
    response.writeHead( 200, { "Content-Type": "text/html" } );
    response.write( 'Received image: <br />' );
    // We use our show show route to display the image.
    response.write( '<img src="/show" />' );
    response.end();
  }); 
}

function show( response, request ) {
  console.log( "Request hander 'show' was called." );
  // Always show the test file.
  fs.readFile( '/tmp/test.png', 'binary', function( error, file ) {
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
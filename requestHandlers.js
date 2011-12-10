// Make request handlers actually output something on screen
// by returning the text.
// This is retuned to the rooter, which returns it to server
// which will use it to set the body of the response

function start() {
  console.log( "Request handler 'start' was called." );
  return "Hello world";
}

function upload() {
  console.log( "Request handler 'upload' was called." );
  return ("Upload I tell you");
}

exports.start = start;
exports.upload = upload;

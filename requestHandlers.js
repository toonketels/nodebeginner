// Make request handlers actually output something on screen
// by returning the text.
// This is retuned to the rooter, which returns it to server
// which will use it to set the body of the response

// Node module to create non blocking child process (on diff threat?).
// Exec function allows us the executre bash commands.
var exec = require("child_process").exec;

function start() {
  console.log( "Request handler 'start' was called." );
  var content = "empty";
  
  exec("ls -lah", function (error, stdout, stderr) {
    content = stdout;
  });
  
  // Still returns empty, because exec is still calculating on diff treath
  // and the content of content is still "empty".
  return content;
}

function upload() {
  console.log( "Request handler 'upload' was called." );
  return ("Upload I tell you");
}

exports.start = start;
exports.upload = upload;

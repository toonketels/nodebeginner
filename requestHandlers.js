// Node module to create non blocking child process (on diff threat?).
// Exec function allows us the executre bash commands.
var exec = require("child_process").exec;


// RequestHandlers now accept response object and will call
// it's methods when ready to respond (in callbacks).
function start(response) {
  console.log( "Request handler 'start' was called." );
  var content = "empty";
  
  // Callboack of exec is called async, which is why it gets skipped.
  // We need to let it excecute the response itself in its callback function.
  exec("ls -alh", function (error, stdout, stderr) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(stdout);
    response.end();
  });
  
  // We no longer need to return anything.
}

function upload(response) {
  console.log( "Request handler 'upload' was called." );
  
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Upload I tell you");
  response.end();  
}

exports.start = start;
exports.upload = upload;

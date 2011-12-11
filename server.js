var http = require("http");
var url = require("url");

function start( route, handle ) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    
    // We pass the response object to the router,
    // it will pass it to the request handler.
    // Request handler will call the response methods directly
    // in it's callback functions.
    route( handle, pathname, response );
  }
  
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;


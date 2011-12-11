// Since we are using formidable to process post data, we need to pass
// the request too to the reqeusthandler because:
//  - formidable uses request as it's arguments.
//  - we want to use formidable in our requesthandler, not here in the server.

// This also means we don't need to send the post data to the requesthandler
// since the data is already in the request already passed. Also not possible
// to consume the data and end events here and in the requesthandler (as part of
// formidable, since the data is already taken by the server,
// and nodejs doesn't buffer the data.

// As a consequence, we delete our eventlisteners.

var http = require("http");
var url = require("url");

function start( route, handle ) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    // Pass the request directly to the requesthandler
    route( handle, pathname, response, request );
  }
  
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;


// Router now accepts request instead of postData as an argument
// and passes it to the requesthandler.

function route( handle, pathname, response, request) {
  console.log( "About to route a request for " + pathname );
  
  if(typeof handle[pathname] === 'function') {
    // Pass  request to requestHandler
    return handle[pathname](response, request);
  } else {
    console.log( "No request handler found for " + pathname );
    
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not Found");
    response.end();
  }
}

exports.route = route;

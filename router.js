// Accept response object as an argument and pass it to the requestHandler
// when appropriate.

function route( handle, pathname, response ) {
  console.log( "About to route a request for " + pathname );
  
  if(typeof handle[pathname] === 'function') {
    // Pas response object to requestHandler
    return handle[pathname](response);
  } else {
    console.log( "No request handler found for " + pathname );
    
    // If no request handler is found, the router is
    // responding itself.
    // No need to return anything anymore.
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not Found");
    response.end();
  }

}

exports.route = route;

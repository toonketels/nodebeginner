var server = require("./server");
var router = require( "./router" );
var requestHandlers = require( "./requestHandlers" );

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
// Add show request handler. This is passed to the server,
// which passes it to the router, which will actually call
// the requesthandler's function.
handle["/show"] = requestHandlers.show;


server.start( router.route, handle );


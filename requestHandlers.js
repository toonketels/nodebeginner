// Make request handlers actually output something on screen
// by returning the text.
// This is retuned to the rooter, which returns it to server
// which will use it to set the body of the response

function start() {
  console.log( "Request handler 'start' was called." );
  
  // Some blocking functionality.
  // This keeps the requesthandler buzy and form responding
  // till 10 seconds passed.
  // In real life, this might be some computation
  function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime < startTime + milliSeconds);
    console.log('sleeping');
  }
  
  console.log('About to call sleep');
  sleep(100000);
  console.log('Actually called sleep');
  console.log('About to return text');
  return "Hello world";
}

function upload() {
  console.log( "Request handler 'upload' was called." );
  return ("Upload I tell you");
}

exports.start = start;
exports.upload = upload;

var http = require('http');
const port = 8080;
//create a server object:
http.createServer(function (req, res) {
  res.write('Node is running on port: '+port); //write a response to the client
  res.end(); //end the response
}).listen(port); //the server object listens on port 8080

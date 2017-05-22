var http = require('http');

function onRequest(request, response){
  response.writeHead(200);
  response.write('Altus APM RMA is working');
  response.end();
}

http.createServer(onRequest).listen(process.env.PORT);
console.log('Server has started');

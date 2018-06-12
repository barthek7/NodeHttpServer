var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function(request, response){
   response.setHeader("Content-Type", "text/html; charset=uft-8" );
   if(request.method === 'GET' && request.url === '/'){
       fs.readFile('./index.html', 'utf-8', function(err, data){
           response.write(data);
           response.end();
       });
   }
   else {
       response.statusCode = 404;
       response.write('<h1>Error 404: Page Not Found</h1>');
       response.end();
   }
});

server.listen(8080);
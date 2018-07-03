var http = require("http"); //solicita el modulo http a node

//Llamamos al metodo createServer
http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Mundo");
  response.end();
}).listen(8888); //createServer nos retorna un objeto que contiene el metodo listen donde indicamos el puerto de escucha

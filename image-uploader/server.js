var http = require("http"); //solicita el modulo http a node

//Llamamos al metodo createServer
function onRequest(request, response){
  console.log("Peticion recibida.")
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Mundo");
  response.end();
}

http.createServer(onRequest).listen(8888); //createServer nos retorna un objeto que contiene el metodo listen donde indicamos el puerto de escucha

console.log("Servidor iniciado.");

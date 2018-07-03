var http = require("http"); //solicita el modulo http a node

function iniciar() {
  function onRequest(request, response){
    console.log("Peticion recibida.");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hola Mundo");
    response.end();
    console.log(request.headers);
  }

  /*
  Llamamos al metodo createServer:
  createServer nos retorna un objeto que contiene el metodo listen donde indicamos
  el puerto de escucha
  */
  http.createServer(onRequest).listen(8888);

  console.log("Servidor iniciado.");
}
/*
exports Permite exportar el server para ser llamado desde otro modulo
*/
exports.iniciar = iniciar;

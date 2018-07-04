var http = require("http"); //solicita el modulo http a node
var url = require("url"); //solicita el modulo url que permite parsear la ruta

function iniciar(route, handle) {
  function onRequest(request, response){

    var pathname = url.parse(request.url).pathname; //parseo la ruta
    console.log("Peticion para " + pathname + " recibida.");

    response.writeHead(200, {"Content-Type": "text/html"});
    var content = route(handle, pathname);
    response.write(content);
    response.end();
    //console.log(request.headers);
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

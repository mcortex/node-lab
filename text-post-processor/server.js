var http = require("http"); //solicita el modulo http a node
var url = require("url"); //solicita el modulo url que permite parsear la ruta

function startServer(route, handle) {
  function onRequest(request, response){

    var pathname = url.parse(request.url).pathname; //parseo la ruta
    var dataPosteada = "";
    console.log("Peticion para " + pathname + " recibida.");

    request.setEncoding("utf8");
    // Agrego un listener que postee de a pedazos para que no sea bloqueante
    request.addListener("data", function(chunk) {
          dataPosteada += chunk;
          console.log("Recibido trozo POST '" + chunk + "'."); // smell
    });
    // Este listener envia toda la data posteada al router
    request.addListener("end", function() {
      route(handle, pathname, response, dataPosteada);
    });

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
exports.startServer = startServer;

var server = require("./server.js");
var route = require("./router.js");
var requestHandlers = require("./requestHandlers.js");

// Definimos una coleccion de requestHandlers
var handle = {}
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;

/*
iniciar(route.route) -> dependency injection, hacemos que el server routee
sin llamar al router desde su codigo, provee bajo acoplamiento.

inyectamos el objeto handle en la ruta
*/
server.startServer(route.route, handle);

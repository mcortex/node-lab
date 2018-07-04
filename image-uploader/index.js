var server = require("./server.js");
var route = require("./router.js");

server.iniciar(route.route);

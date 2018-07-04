/*
Redirige las peticiones dependiendo del handler
*/

function route(handle, pathname, response, postData) {
  console.log("A punto de rutear una peticion para " + pathname);
  if (typeof handle[pathname] === 'function') {
    return handle[pathname](response, postData); //Agrego el dato posteado por el listener
  } else {
    console.log("No se encontro manipulador para " + pathname);
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("404 No Encontrado.");
    response.end();
  }
}

exports.route = route;

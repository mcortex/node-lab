/*
El siguiente ejemplo muestra el pasaje de una funcion como parametro de
otra funcion
*/
function decir(palabra) {
  console.log(palabra);
}

function ejecutar(algunaFuncion, valor) {
  algunaFuncion(valor);
} // decir se "convierte" en algunaFuncion al ser pasada como parametro

ejecutar(decir, "Hola!");

/*
Como somos unos locos, y JS nos deja, podemos directamente usar la palaba
reservada function para declarar una funcion anonima y pasarla como parametro
*/
ejecutar(function(palabra){ console.log(palabra);}, "Hola desde la funcion anonima!")

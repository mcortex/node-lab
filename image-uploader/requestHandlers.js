/*
Permite ligar al requestHandler con el router
*/

function iniciar() {
  console.log("Manipulador de peticion 'iniciar' has sido llamado.");
  return "Hola Iniciar";
}

function subir() {
  console.log("Manipulador de peticion 'subir' has sido llamado.");
  return "Hola Subir";
}

exports.iniciar = iniciar;
exports.subir = subir;

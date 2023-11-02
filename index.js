//Atrapar elemento select
const selectEstado = document.getElementById ('estado');
 //Obtener el elemento p
const mensajeEstado = document.getElementById ('estadoDeLaTarea');

//Función para modificar el párrafo 
function estadoModificado (){

//se obtiene el valor del select 
  let opcionSeleccionado = selectEstado.value;

//se muestra el valor capturado en el párrafo
  mensajeEstado.textContent = 'La tarea se encuenta en estado: ' + opcionSeleccionado;
}

//Asignar evento al select
selectEstado.addEventListener ('change', estadoModificado);

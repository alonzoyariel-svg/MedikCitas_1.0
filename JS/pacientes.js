/* Pacientes */


function initializePacientes(){

    console.log("Módulo Pacientes cargado.");

}


/* Guarda un nuevo paciente. */
function guardarPaciente(event){

    event.preventDefault();

    showMessage("Paciente registrado correctamente.");

}


/* Limpia el formulario. */
function limpiarPaciente(formulario){

    formulario.reset();

}


/* Buscar paciente (simulado) */
function buscarPaciente(){

    showMessage("Función de búsqueda en desarrollo.");

}
/* Citas.*/


function initializeCitas(){

    console.log("Módulo Citas cargado.");

}


/* Registrar nueva cita. */
function guardarCita(event){

    event.preventDefault();

    showMessage("Cita registrada correctamente.");

}


/* Cancelar formulario. */
function cancelarCita(form){

    form.reset();

}


/* Buscar paciente. */
function buscarPaciente(){

    console.log("Buscar paciente...");

}


/* Buscar horarios disponibles. */
function cargarHorarios(){

    console.log("Consultar horarios.");

}


/* Confirmar asistencia. */
function confirmarCita(id){

    console.log("Confirmar cita:",id);

}


/* Cancelar cita. */
function cancelarCitaPaciente(id){

    console.log("Cancelar cita:",id);

}
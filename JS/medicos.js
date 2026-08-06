/* Gestión del personal médico.*/


function initializeMedicos(){

    console.log("Módulo Médicos cargado.");

}


/* Guarda un médico. */
function guardarMedico(event){

    event.preventDefault();

    showMessage("Perfil médico guardado correctamente.");

}


/* Limpia el formulario. */
function limpiarFormularioMedico(form){

    form.reset();

}


/* Simulación de carga de fotografía. */
function subirFotografia(){

    showMessage("Seleccione una fotografía.");

}


/* Editar médico */
function editarMedico(id){

    console.log("Editar Médico:",id);

}


/* Eliminar médico */
function eliminarMedico(id){

    console.log("Eliminar Médico:",id);

}
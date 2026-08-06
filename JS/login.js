/* Login */


function initializeLogin(){

    console.log("Módulo Login cargado.");

}


/* Simulación del inicio de sesión. */
function login(event){

    event.preventDefault();

    showMessage("Inicio de sesión correcto.");

    const citasLink = document.querySelectorAll(".nav-link")[1];

    showView("citas", citasLink);

}


/* Simulación de cierre de sesión. */
function logout(){

    showMessage("Sesión finalizada.");

    const loginLink = document.querySelectorAll(".nav-link")[0];

    showView("login", loginLink);

}
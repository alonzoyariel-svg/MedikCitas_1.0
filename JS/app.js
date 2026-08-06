/* Inicialización general del sistema. */

document.addEventListener("DOMContentLoaded", initializeApp);

/* Inicializa la aplicación. */
function initializeApp() {

    initializeNavigation();

    initializeSidebar();

    initializeToast();

    initializeModules();

    loadDefaultView();

}

/* Inicializa todos los módulos. */
function initializeModules(){

    initializeLogin();

    initializePacientes();

    initializeMedicos();

    initializeCitas();

    initializeReportes();

}

/* Vista inicial. */
function loadDefaultView(){

    const links = document.querySelectorAll(".nav-link");

    if(links.length > 1){

        showView("citas", links[1]);

    }

}
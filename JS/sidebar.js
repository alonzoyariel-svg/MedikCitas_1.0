/* Sidebar*/

let sidebar;

let overlay;

let openButton;

let closeButton;


/* Inicializa Sidebar. */
function initializeSidebar(){

    sidebar=document.getElementById("sidebar");

    overlay=document.getElementById("mobileOverlay");

    openButton=document.getElementById("openSidebarBtn");

    closeButton=document.getElementById("closeSidebarBtn");

    openButton.addEventListener("click",openMobileSidebar);

    closeButton.addEventListener("click",closeMobileSidebar);

    overlay.addEventListener("click",closeMobileSidebar);

}


/* Abrir menú. */
function openMobileSidebar(){

    sidebar.classList.remove("-translate-x-full");

    overlay.classList.remove("hidden");

}


/* Cerrar menú. */
function closeMobileSidebar(){

    sidebar.classList.add("-translate-x-full");

    overlay.classList.add("hidden");

}
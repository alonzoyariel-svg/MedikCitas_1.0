/* Navigation */

function initializeNavigation(){

    console.log("Navigation Ready");

}


/* Cambia la vista actual. */
function showView(viewId, linkElement){

    hideAllViews();

    deactivateLinks();

    activateView(viewId);

    activateLink(linkElement);

    closeMobileSidebar();

}


/* Oculta todas las vistas. */
function hideAllViews(){

    document.querySelectorAll(".view-section").forEach(view=>{

        view.classList.add("hidden");

        view.classList.remove("fade-in");

    });

}


/* Activa la vista seleccionada. */
function activateView(viewId){

    const view=document.getElementById(`view-${viewId}`);

    if(!view) return;

    view.classList.remove("hidden");

    void view.offsetWidth;

    view.classList.add("fade-in");

}


/* Quita el estado activo. */
function deactivateLinks(){

    document.querySelectorAll(".nav-link").forEach(link=>{

        link.classList.remove("active");

    });

}


/* Activa un enlace. */
function activateLink(link){

    if(!link) return;

    link.classList.add("active");

    const title=link.querySelector("span").innerText;

    document.getElementById("viewTitle").innerText=title;

}
/* Sistema de notificaciones del sistema. */

let toast;
let toastMessage;
let toastTimeout;

/* Inicializa el sistema de notificaciones. */
function initializeToast(){

    toast = document.getElementById("toast");
    toastMessage = document.getElementById("toastMessage");

}

/* Muestra una notificación. */
function showMessage(message){

    if(!toast || !toastMessage) return;

    toastMessage.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimeout);

    toastTimeout = setTimeout(() => {

        toast.classList.remove("show");

    },3000);

}

/* Oculta el toast manualmente. */
function hideMessage(){

    toast.classList.remove("show");

}
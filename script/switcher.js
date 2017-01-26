/* Page switcher */
function switcher(pagenum){
    switch(pagenum){
        /* Home page */
        case 0:
            window.location.href = "index.html"
            break;
        /* About page */
        case 1:
            window.location.href = "about.html"
            break;
        /* Services page */
        case 2:
            window.location.href = "services.html"
            break;
        /* Clients page */
        case 3:
            window.location.href = "clients.html"
            break;
        /* Liaison page */
        case 4:
            window.location.href = "liaison.html"
            break;
        default:
            break;
    }
}

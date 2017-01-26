/* .menuText:hover + .menuText_interact */
function selector(colnum, type){
    /* Gets respective bar */
    switch(colnum){
        case 1:
            var curcol = document.getElementById("about_interact");
            break;
        case 2:
            var curcol = document.getElementById("services_interact");
            break;
        case 3:
            var curcol = document.getElementById("clients_interact");
            break;
        case 4:
            var curcol = document.getElementById("liaison_interact");
            break;
        default:
            break;
    }
    switch(type){
        /* MOUSEIN */
        case 1:
            curcol.style.width = "150px";
            break;
        /* MOUSEOUT */
        case 2:
            curcol.style.width = "0px";
            break;
        default:
            break;
    }
}

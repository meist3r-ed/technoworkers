/* .menuText:hover + .menuText_interact */
function selector(colnum, type){
    /* Gets respective bar */
    switch(colnum){
        case 1:
            var curcol = document.getElementById("about_interact");
            var curcolside = document.getElementById("about_interact_side");
            break;
        case 2:
            var curcol = document.getElementById("services_interact");
            var curcolside = document.getElementById("services_interact_side");
            break;
        case 3:
            var curcol = document.getElementById("clients_interact");
            var curcolside = document.getElementById("clients_interact_side");
            break;
        case 4:
            var curcol = document.getElementById("liaison_interact");7
            var curcolside = document.getElementById("liaison_interact_side");
            break;
        default:
            break;
    }
    switch(type){
        /* MOUSEIN */
        case 1:
            curcol.style.width = "150px";
            curcolside.style.width = "300px";
            break;
        /* MOUSEOUT */
        case 2:
            curcol.style.width = "0px";
            curcolside.style.width = "0px";
            break;
        default:
            break;
    }
}

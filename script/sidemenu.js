function openSideMenu(){
    var side_menu = document.getElementById("side_menu_container");

    if(side_menu.style.display.localeCompare("none") == 0){
        showMenu(side_menu);
    }
    else{
        hideMenu(side_menu);
    }
}

function showMenu(menu){
    menu.style.display = "block";
}

function hideMenu(menu){
    menu.style.display = "none";
}

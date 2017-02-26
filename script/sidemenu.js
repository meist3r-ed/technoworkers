function showMenu(menu){
    menu.style.display = "block";
}

function hideMenu(menu){
    menu.style.display = "none";
}

function menuClicked(){
    var side_menu = document.getElementById("side_menu_container");

    if(side_menu.style.display.localeCompare("none") == 0){
        showMenu(side_menu);
    }
    else{
        hideMenu(side_menu);
    }
}

window.addEventListener('click', function(e){
    if (document.getElementById("menuIcon").contains(e.target)){
        // Clicked in box
        menuClicked();
    } else{
        // Clicked outside the box
        var side_menu = document.getElementById("side_menu_container");
        hideMenu(side_menu);
    }
});

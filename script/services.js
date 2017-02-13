function services_clear_buttons(){
    var button = document.getElementById("button_1");
    button.innerHTML = "Suporte";

    button = document.getElementById("button_2");
    button.innerHTML = "Sistemas";

    button = document.getElementById("button_3");
    button.innerHTML = "Infraestrutura";

    button = document.getElementById("button_4");
    button.innerHTML = "Gerenciamento";
}

function services_select(num){
    var curbut = "button_" + num.toString();
    var bracket = document.getElementById("bracket");
    var button = document.getElementById(curbut);
    services_clear_buttons();

    switch(num){
        case 1:
            bracket.style.marginLeft = "4%";
            button.innerHTML = "<span class=\"text_bold\">Suporte</span>";
            break;
        case 2:
            bracket.style.marginLeft = "14.5%";
            button.innerHTML = "<span class=\"text_bold\">Sistemas</span>";
            break;
        case 3:
            bracket.style.marginLeft = "28.5%";
            button.innerHTML = "<span class=\"text_bold\">Infraestrutura</span>";
            break;
        case 4:
            bracket.style.marginLeft = "46.5%";
            button.innerHTML = "<span class=\"text_bold\">Gerenciamento</span>";
            break;
        default:
            break;
    }
}

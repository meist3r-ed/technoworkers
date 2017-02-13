function services_button_1_text(){
    var text = "Gestão administrativa do parque de equipamentos, "
    + "software e sistemas. Controle da obsolescência e "
    + "descarte de lixo eletrônico dentro das normas ambientais "
    + "de destinação. "
    + "<hr></hr> "
    + "Otimização da utilização de recursos de "
    + "TI ao mesmo tempo em que permite manter a atualização de "
    + "versão de hardware e software com preservação de investimentos. ";
    return text;
}

function services_button_2_text(){
    var text = "Suporte, presencial e remoto, à utilização "
    + "do ambiente de TI do nível básico ao avançado. "
    + "<hr></hr> "
    + "O foco deste serviço ao usuário final que precisados recursos de "
    + "TI como ferramental para executar suas tarefas cotidianas."
    return text;
}

function services_clear_buttons(){
    var button = document.getElementById("button_1");
    button.innerHTML = "Gestão";

    button = document.getElementById("button_2");
    button.innerHTML = "Suporte";

    button = document.getElementById("button_3");
    button.innerHTML = "Gerenciamento";

    button = document.getElementById("button_4");
    button.innerHTML = "Projetos";
}

function services_select(num){
    var curbut = "button_" + num.toString();
    var bracket = document.getElementById("bracket");
    var button = document.getElementById(curbut);
    var title = document.getElementById("content_text_title");
    var body = document.getElementById("content_text_body");
    services_clear_buttons();

    switch(num){
        case 1:
            bracket.style.marginLeft = "3%";
            button.innerHTML = "<span class=\"text_bold\">Gestão</span>";
            title.innerHTML = "Gestão de Ativos de TI";
            body.innerHTML = services_button_1_text();
            break;
        case 2:
            bracket.style.marginLeft = "14%";
            button.innerHTML = "<span class=\"text_bold\">Suporte</span>";
            title.innerHTML = "Service Desk";
            body.innerHTML = services_button_2_text();
            break;
        case 3:
            bracket.style.marginLeft = "29.5%";
            button.innerHTML = "<span class=\"text_bold\">Gerenciamento</span>";
            break;
        case 4:
            bracket.style.marginLeft = "49%";
            button.innerHTML = "<span class=\"text_bold\">Projetos</span>";
            break;
        default:
            break;
    }
}

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
    + "TI como ferramental para executar suas tarefas cotidianas. "
    return text;
}

function services_button_3_text(){
    var text = "Gerenciamento da infraestrutura de comunicação "
    + "e sustentação de sistemas de informação, como servidores, "
    + "Intranet, Internet e canais de comunicação. "
    + "<hr></hr> "
    + "Garantia da disponibilidade e capacidade do ambiente através "
    + "de monitoramento proativo e proposta de solução de gargalos. "
    return text;
}

function services_button_4_text_1(){
    var text = "Desenvolvimentos de projetos sob medida para a "
    + "adequação ou expansão da infraestrutura de TI às "
    + "necessidades de negócio da empresa. Balançeamento de "
    + "soluções de acordo com a capacidade e a atenção aos "
    + "pontos críticos de negócio. "
    + "<hr></hr> "
    return text;
}

function services_button_4_text_2(){
    var text = "Desenvolvimentos de projetos de sistemas para todo "
    + "tipo de necessidade e aplicação. Projetos especiais para "
    + "internet e serviços móveis. Terceirização de desenvolvimento "
    + "de sistemas e módulos customizados de acordo com as "
    + "necessidades. ";
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

function services_clear_table(){
    var title = document.getElementById("content_text_title");
    title.innerHTML = "";

    var body = document.getElementById("content_text_body");
    body.innerHTML = "";

    var title_2 = document.getElementById("content_text_title_2");
    title_2.innerHTML = "";

    var body_2 = document.getElementById("content_text_body_2");
    body_2.innerHTML = "";
}

function get_bracket_position(num){
    var button_1 = document.getElementById("button_1").clientWidth;
    var button_2 = document.getElementById("button_2").clientWidth;
    var button_3 = document.getElementById("button_3").clientWidth;
    var button_4 = document.getElementById("button_4").clientWidth;
    var comp = "2%";
    var sum = 0;

    switch(num){
        case 1:
            sum += button_1 / 2;
            break;
        case 2:
            sum += button_1;
            sum += button_2 / 2;
            break;
        case 3:
            sum += button_1;
            sum += button_2;
            sum += button_3 / 2;
            break;
        case 4:
            sum += button_1;
            sum += button_2;
            sum += button_3;
            sum += button_4 / 2;
            break;
    }

    return "calc(" + sum.toString() + "px - " + comp + ")";
}

function services_select(num){
    var curbut = "button_" + num.toString();
    var bracket = document.getElementById("bracket");
    var button = document.getElementById(curbut);
    var title = document.getElementById("content_text_title");
    var body = document.getElementById("content_text_body");

    services_clear_buttons();
    services_clear_table();

    bracket.style.marginLeft = get_bracket_position(num);

    switch(num){
        case 1:
            button.innerHTML = "<span class=\"text_bold\">Gestão</span>";
            title.innerHTML = "Gestão de Ativos de TI";
            body.innerHTML = services_button_1_text();
            break;
        case 2:
            button.innerHTML = "<span class=\"text_bold\">Suporte</span>";
            title.innerHTML = "Service Desk";
            body.innerHTML = services_button_2_text();
            break;
        case 3:
            button.innerHTML = "<span class=\"text_bold\">Gerenciamento</span>";
            title.innerHTML = "Serviços de Campo e Gerenciamento";
            body.innerHTML = services_button_3_text();
            break;
        case 4:
            button.innerHTML = "<span class=\"text_bold\">Projetos</span>";
            title.innerHTML = "Projetos de Infraestrutura de TI";
            body.innerHTML = services_button_4_text_1();
            var title_2 = document.getElementById("content_text_title_2");
            title_2.innerHTML = "Projetos de Sistemas";
            var body_2 = document.getElementById("content_text_body_2");
            body_2.innerHTML = services_button_4_text_2();
            break;
        default:
            break;
    }
}

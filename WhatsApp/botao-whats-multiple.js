/*

AQUI VAI O CÓDIGO HTML PARA COLAR NO FOOTER:
___________________________________________________

<!-- INICIO DO SCRIPT DE WHATSAPP-->
<script type="text/javascript">
    //TROQUE O NUMERO E NOME DO TELEFONE AQUI - FORMATO: DDD NUMERO
    telefone1 = '84981196367';
    tituloTelefone1 = 'Novos';
    
    telefone2 = '84981196367';
    tituloTelefone2 = 'Seminovos';
    
    telefone3 = '84981196367';
    tituloTelefone3 = 'Pós-vendas';

    //TROQUE A MENSAGEM, EDITANDO O TEXTO DENTRO DAS ASPAS
    mensagem = "Olá, tudo bem?";
	
	//TROQUE O TÍTULO, EDITANDO O TEXTO DENTRO DAS ASPAS
    tituloBotao = "WhatsApp";
</script>

<script type="text/javascript" src="//legado.autoforce.com.br/mods/plugins/WhatsApp/botao-whats-multiple.js"></script>
<!-- FIM DO SCRIPT DE WHATSAPP-->

___________________________________________________

1 -> COPIA E COLA O CÓDIGO NO FOOTER.

2 -> SUBSTITUI O QUE ESTA NA VARIAVEL NÚMERO COM NUMERO DESEJADO.

3 -> SUBSTITUI O QUE ESTA NA VARIAVEL MENSAGEM COM O TEXTO INICIAL DESEJADO.

4 -> SALVA E TESTA NO SHOWROOM.

*/

var telefone1, telefone2, telefone3, tituloTelefone1, tituloTelefone2, tituloTelefone3, mensagem, tituloBotao;


/* VERIFICA SE É MOBILE OU NÃO */
if(!isMobile()){
    /* SE NAO TIVER SEGUNDA VARIÁVEL PREENCHIDA, CRIA 1 NÚMERO DE WHATSAPP */
    if(telefone2 == null || telefone2 == ''){
        function whatsApp(telefone1, mensagem, tituloTelefone1) {
            var botaoWhats = "<div id='popup-whats' class='btn-group dropup' style='background-color: #38BA45; display: block; width: 240px; position:fixed; cursor:pointer; bottom:15px; left:15px; z-index:1000; border-radius: 5px;'>"+
                "<a target='_blank' href='https://api.whatsapp.com/send?phone=55" + telefone1 + "&text=" + mensagem + "' type='button' class='btn' style='box-shadow: none; -webkit-box-shadow: none; border: 0; background-color: #38BA45; text-align: left; font-weight: 600; color: #FFF; width: 100%; padding: 10px'>"+
                    tituloBotao+
                    "<img style='position: absolute;right: 10px; top: 7px;' class='icone' src='//legado.autoforce.com.br/mods/plugins/WhatsApp/img/whatsapp-icone-7.png' width='24'>"+
                "</a>"+
            "</div>";
            //adiciona 2 divs, uma com bg e outra sem, formando uma caixa com botao close - class='hidden-sm hidden-xs'
            $("body").append(botaoWhats);
        };

    //delay para em LP
    setTimeout(whatsApp(telefone1, mensagem, tituloTelefone1), 3000);
}

/* SE TIVER SEGUNDA VARIAVEL PREENCHIDA, CRIA 2 NÚMEROS DE WHATSAPP */
if(telefone2 && telefone2 != ''){
    function whatsApp(telefone1, telefone2, mensagem, tituloTelefone1, tituloTelefone2) {
        var botaoWhats = "<div id='popup-whats' class='btn-group dropup' style='background-color: #38BA45; display: block; width: 280px; position:fixed; cursor:pointer; bottom:15px; left:15px; z-index:1000; border-radius: 5px;'>"+
            "<a type='button' class='btn dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' style='text-align: left; font-weight: 600; color: #FFF; width: 100%; padding: 10px'>"+
                tituloBotao+
                "<i style='position: absolute; right: 10px;' class='entypo-up-open'></i>"+
            "</a>"+
            "<div class='dropdown-menu' style='width: 100%'>"+
                "<li style='margin: 0'>"+
                    "<a style='padding: 12px;' class='dropdown-item' href='https://api.whatsapp.com/send?phone=55" + telefone1 + "&text=" + mensagem + "' target='_blank'><b>"+tituloTelefone1+":</b> "+maskFone(telefone1)+
                    "<img style='position: absolute; right: 10px;' class='icone' src='//legado.autoforce.com.br/mods/plugins/WhatsApp/img/whatsapp-icone-7.png' width='24'>"+
                    "</a>"+
                "</li>"+
                "<li style='margin: 0' class='divider'></li>"+
                "<li>"+
                    "<a style='padding: 12px;' class='dropdown-item' href='https://api.whatsapp.com/send?phone=55" + telefone2 + "&text=" + mensagem + "' target='_blank'><b>"+tituloTelefone2+":</b> "+maskFone(telefone2)+
                    "<img style='position: absolute; right: 10px;' class='icone' src='//legado.autoforce.com.br/mods/plugins/WhatsApp/img/whatsapp-icone-7.png' width='24'>"+
                    "</a>"+
                "</li>"+
            "</div>"+
        "</div>";
        //adiciona 2 divs, uma com bg e outra sem, formando uma caixa com botao close - class='hidden-sm hidden-xs'
        $("body").append(botaoWhats);
    };

    //delay para em LP
    setTimeout(whatsApp(telefone1, telefone2, mensagem, tituloTelefone1, tituloTelefone2), 3000);
}

/* SE TIVER TERCEIRA VARIAVEL PREENCHIDA, CRIA 3 NÚMEROS DE WHATSAPP */
if(telefone3 && telefone3 != ''){
    function whatsApp(telefone1, telefone2, telefone3, mensagem, tituloTelefone1, tituloTelefone2, tituloTelefone3) {
        var botaoWhats = "<div id='popup-whats' class='btn-group dropup' style='background-color: #38BA45; display: block; width: 280px; position:fixed; cursor:pointer; bottom:15px; left:15px; z-index:1000; border-radius: 5px;'>"+
            "<a type='button' class='btn dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' style='text-align: left; font-weight: 600; color: #FFF; width: 100%; padding: 10px'>"+
                tituloBotao+
                "<i style='position: absolute; right: 10px;' class='entypo-up-open'></i>"+
            "</a>"+
            "<div class='dropdown-menu' style='width: 100%'>"+
                "<li style='margin: 0'>"+
                    "<a style='padding: 12px;' class='dropdown-item' href='https://api.whatsapp.com/send?phone=55" + telefone1 + "&text=" + mensagem + "' target='_blank'><b>"+tituloTelefone1+":</b> "+maskFone(telefone1)+
                    "<img style='position: absolute; right: 10px;' class='icone' src='//legado.autoforce.com.br/mods/plugins/WhatsApp/img/whatsapp-icone-7.png' width='24'>"+
                    "</a>"+
                "</li>"+
                "<li style='margin: 0' class='divider'></li>"+
                "<li>"+
                    "<a style='padding: 12px;' class='dropdown-item' href='https://api.whatsapp.com/send?phone=55" + telefone2 + "&text=" + mensagem + "' target='_blank'><b>"+tituloTelefone2+":</b> "+maskFone(telefone2)+
                    "<img style='position: absolute; right: 10px;' class='icone' src='//legado.autoforce.com.br/mods/plugins/WhatsApp/img/whatsapp-icone-7.png' width='24'>"+
                    "</a>"+
                "</li>"+
                "<li style='margin: 0' class='divider'></li>"+
                "<li>"+
                    "<a style='padding: 12px;' class='dropdown-item' href='https://api.whatsapp.com/send?phone=55" + telefone3 + "&text=" + mensagem + "' target='_blank'><b>"+tituloTelefone3+":</b> "+maskFone(telefone3)+
                    "<img style='position: absolute; right: 10px;' class='icone' src='//legado.autoforce.com.br/mods/plugins/WhatsApp/img/whatsapp-icone-7.png' width='24'>"+
                    "</a>"+
                "</li>"+
            "</div>"+
        "</div>";
        //adiciona 2 divs, uma com bg e outra sem, formando uma caixa com botao close - class='hidden-sm hidden-xs'
        $("body").append(botaoWhats);
    };

    //delay para em LP
    setTimeout(whatsApp(telefone1, telefone2, telefone3, mensagem, tituloTelefone1, tituloTelefone2, tituloTelefone3), 3000);
}
}
else{
    /* SE NAO TIVER SEGUNDA VARIÁVEL PREENCHIDA, CRIA 1 NÚMERO DE WHATSAPP */
    if(telefone2 == null || telefone2 == ''){
        function whatsApp(telefone1, mensagem, tituloTelefone1) {
            var botaoWhats = "<a href='https://api.whatsapp.com/send?phone=55" + telefone1 + "&text=" + mensagem + "' target='_blank' style='height: 60px; width: 60px;'>"+
            "<div id='popup-whats' class='btn-group dropup' style='display: block; width:60px; position:fixed; height:60px; background-size: cover; cursor:pointer; background-image:url(//assets.autoforce.com.br/mods/plugins/WhatsApp/img/whatsapp-icone-7.png); bottom: 20px; left:20px; z-index:1000;'>"+
                "</div>"+
                "</a>";
            //adiciona 2 divs, uma com bg e outra sem, formando uma caixa com botao close - class='hidden-sm hidden-xs'
            $("body").append(botaoWhats);
        };

        //delay para em LP
        setTimeout(whatsApp(telefone1, mensagem, tituloTelefone1), 3000);
    }

    /* SE TIVER SEGUNDA VARIAVEL PREENCHIDA, CRIA 2 NÚMEROS DE WHATSAPP */
    if(telefone2 && telefone2 != ''){
        function whatsApp(telefone1, telefone2, mensagem, tituloTelefone1, tituloTelefone2) {
        var botaoWhats = "<div id='popup-whats' class='btn-group dropup' style='display: block; width:60px; position:fixed; height:60px; background-size: cover; cursor:pointer; background-image:url(//assets.autoforce.com.br/mods/plugins/WhatsApp/img/whatsapp-icone-7.png); bottom: 20px; left:20px; z-index:1000;'>"+
            "<a type='button' class='btn dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' style='height: 60px; width: 60px;'>"+
            "</a>"+
            "<div class='dropdown-menu' style='width: 200px'>"+
                "<li style='margin: 0'>"+
                    "<a style='padding: 12px;' class='dropdown-item' href='https://api.whatsapp.com/send?phone=55" + telefone1 + "&text=" + mensagem + "' target='_blank'><b>"+tituloTelefone1+"</b> "+maskFone(telefone1)+
                    "<img style='position: absolute; right: 10px;' class='icone' src='//assets.autoforce.com.br/mods/plugins/WhatsApp/img/whatsapp-icone-7.png' width='24'>"+
                    "</a>"+
                "</li>"+
                "<li style='margin: 0' class='divider'></li>"+
                "<li>"+
                    "<a style='padding: 12px;' class='dropdown-item' href='https://api.whatsapp.com/send?phone=55" + telefone2 + "&text=" + mensagem + "' target='_blank'><b>"+tituloTelefone2+"</b> "+maskFone(telefone2)+
                    "<img style='position: absolute; right: 10px;' class='icone' src='//assets.autoforce.com.br/mods/plugins/WhatsApp/img/whatsapp-icone-7.png' width='24'>"+
                    "</a>"+
                "</li>"+
            "</div>"+
        "</div>";
        //adiciona 2 divs, uma com bg e outra sem, formando uma caixa com botao close - class='hidden-sm hidden-xs'
        $("body").append(botaoWhats);
        };

        //delay para em LP
        setTimeout(whatsApp(telefone1, telefone2, mensagem, tituloTelefone1, tituloTelefone2), 3000);
    }

    /* SE TIVER TERCEIRA VARIAVEL PREENCHIDA, CRIA 3 NÚMEROS DE WHATSAPP */
    if(telefone3 && telefone3 != ''){
        function whatsApp(telefone1, telefone2, telefone3, mensagem, tituloTelefone1, tituloTelefone2, tituloTelefone3) {
            var botaoWhats = "<div id='popup-whats' class='btn-group dropup' style='display: block; width:60px; position:fixed; height:60px; background-size: cover; cursor:pointer; background-image:url(//assets.autoforce.com.br/mods/plugins/WhatsApp/img/whatsapp-icone-7.png); bottom: 20px; left:20px; z-index:1000;'>"+
                "<a type='button' class='btn dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' style='height: 60px; width: 60px;'>"+
                "</a>"+
                "<div class='dropdown-menu' style='width: 200px'>"+
                    "<li style='margin: 0'>"+
                        "<a style='padding: 12px;' class='dropdown-item' href='https://api.whatsapp.com/send?phone=55" + telefone1 + "&text=" + mensagem + "' target='_blank'><b>"+tituloTelefone1+":</b> "+maskFone(telefone1)+
                            "<img style='position: absolute; right: 10px;' class='icone' src='//legado.autoforce.com.br/mods/plugins/WhatsApp/img/whatsapp-icone-7.png' width='24'>"+
                        "</a>"+
                    "</li>"+
                    "<li style='margin: 0' class='divider'></li>"+
                    "<li>"+
                        "<a style='padding: 12px;' class='dropdown-item' href='https://api.whatsapp.com/send?phone=55" + telefone2 + "&text=" + mensagem + "' target='_blank'><b>"+tituloTelefone2+":</b> "+maskFone(telefone2)+
                            "<img style='position: absolute; right: 10px;' class='icone' src='//legado.autoforce.com.br/mods/plugins/WhatsApp/img/whatsapp-icone-7.png' width='24'>"+
                        "</a>"+
                    "</li>"+
                    "<li style='margin: 0' class='divider'></li>"+
                    "<li>"+
                        "<a style='padding: 12px;' class='dropdown-item' href='https://api.whatsapp.com/send?phone=55" + telefone3 + "&text=" + mensagem + "' target='_blank'><b>"+tituloTelefone3+":</b> "+maskFone(telefone3)+
                            "<img style='position: absolute; right: 10px;' class='icone' src='//legado.autoforce.com.br/mods/plugins/WhatsApp/img/whatsapp-icone-7.png' width='24'>"+
                        "</a>"+
                    "</li>"+
                "</div>"+
            "</div>";
            //adiciona 2 divs, uma com bg e outra sem, formando uma caixa com botao close - class='hidden-sm hidden-xs'
            $("body").append(botaoWhats);
        };

        //delay para em LP
        setTimeout(whatsApp(telefone1, telefone2, telefone3, mensagem, tituloTelefone1, tituloTelefone2, tituloTelefone3), 3000);
    }

    $('<br>').insertAfter('#popup-whats > div.dropdown-menu > li > a > b');
    
}

/* MASCARA PARA O TELEFONE PARA NÃO PRECISAR USAR NA VARIÁVEL */
function maskFone(telefone){
    if(telefone.length == 11){
        var res = telefone.match(/(\d{2})(\d{5})(\d{4})/);
        var res = "(" + res[1] + ") " + res[2] + "-" + res[3];
        return res;
    }
    if(telefone.length == 10){
        var res = telefone.match(/(\d{2})(\d{4})(\d{4})/);
        var res = "(" + res[1] + ") " + res[2] + "-" + res[3];
        return res;
    }
}

/* CRIA EVENTOS DE MUDANÇA DE ICONES QUANDO ABRIR E FECHAR O BOTÃO, SETA COR DE DIVIDER E ADICIONA ESTILO */
$(document).ready(function(){
    $('#popup-whats').on('click',function(){
        if($('#popup-whats').hasClass('open')){
            $('#popup-whats > a > i').toggleClass('entypo-up-open entypo-down-open');
        }else{
            $('#popup-whats > a > i').toggleClass('entypo-down-open entypo-up-open');
        }
    });

    $('#popup-whats > div.dropdown-menu > li.divider').css({'background-color':'#e5e5e5'});

    $('<style>.dropup .dropdown-menu {-webkit-transition: all 0.3s;-moz-transition: all 0.3s;-ms-transition: all 0.3s;-o-transition: all 0.3s;transition: all 0.3s;max-height: 0;display: block;overflow: hidden;opacity: 0;}.dropup.open .dropdown-menu {max-height: 300px;opacity: 1;}</style>').appendTo('head');
});
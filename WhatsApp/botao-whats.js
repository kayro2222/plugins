/*

AQUI VAI O CÓDIGO HTML PARA COLAR NO FOOTER:
___________________________________________________

<!-- INICIO DO SCRIPT DE WHATSAPP-->
<script type="text/javascript">
    //TROQUE O NUMERO AQUI - FORMATO: 55 DDD NUMERO
    var telefone = 5584996686365;

    //TROQUE A MENSAGEM, EDITANDO O TEXTO DENTRO DAS ASPAS
    var mensagem = "Olá, tudo bem?";
</script>

<script type="text/javascript" src="//legado.autoforce.com.br/mods/plugins/WhatsApp/botao-whats.js"></script>
<!-- FIM DO SCRIPT DE WHATSAPP-->

___________________________________________________

1 -> COPIA E COLA O CÓDIGO NO FOOTER.

2 -> SUBSTITUI O QUE ESTA NA VARIAVEL NÚMERO COM NUMERO DESEJADO.

3 -> SUBSTITUI O QUE ESTA NA VARIAVEL MENSAGEM COM O TEXTO INICIAL DESEJADO.

4 -> SALVA E TESTA NO SHOWROOM.

*/

function whatsApp(img, telefone, mensagem) {
    //adiciona 2 divs, uma com bg e outra sem, formando uma caixa com botao close - class='hidden-sm hidden-xs'
    $("body").append("<div  id='popup-whats' style='display: block; width:260px; position:fixed; height:40px; cursor:pointer; background-image:url(" + img + ");	bottom: 0; left:10px; z-index:1000;'></div>");
    //adiciona link à div.parent que abre noutra janela
    $("#popup-whats").attr("onclick", "javascript:window.open('https://api.whatsapp.com/send?phone=" + telefone + "&text=" + mensagem + "', '_blank');");

};

//delay para em LP
setTimeout(whatsApp('//legado.autoforce.com.br/mods/plugins/WhatsApp/img/whats-bot.png', telefone, mensagem), 3000);
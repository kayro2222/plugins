/*

AQUI VAI O CÓDIGO HTML PARA COLAR NO FOOTER:
___________________________________________________

<!-- INICIO DO SCRIPT DE WHATSAPP-->
<script type="text/javascript">
    //TROQUE O NUMERO AQUI - FORMATO: 55 DDD NUMERO
    var telefone = 84996686365;

    //TROQUE A MENSAGEM, EDITANDO O TEXTO DENTRO DAS ASPAS
    var mensagem = "Olá, tudo bem?";
	
	//TROQUE O TITULO, EDITANDO O TEXTO DENTRO DAS ASPAS
    var titulo = "CENTRAL DE VENDAS";
</script>

<script type="text/javascript" src="//legado.autoforce.com.br/mods/plugins/WhatsApp/botao-whats-novo.js"></script>
<!-- FIM DO SCRIPT DE WHATSAPP-->

___________________________________________________

1 -> COPIA E COLA O CÓDIGO NO FOOTER.

2 -> SUBSTITUI O QUE ESTA NA VARIAVEL NÚMERO COM NUMERO DESEJADO.

3 -> SUBSTITUI O QUE ESTA NA VARIAVEL MENSAGEM COM O TEXTO INICIAL DESEJADO.

4 -> SALVA E TESTA NO SHOWROOM.

*/

function whatsApp(img, telefone, mensagem) {
    //adiciona 2 divs, uma com bg e outra sem, formando uma caixa com botao close - class='hidden-sm hidden-xs'
    $("body").append("<div id='popup-whats' style='background-color: #38BA45; text-align: center; display: block; width:240px; position:fixed; height:50px; cursor:pointer; bottom:15px; left:15px; z-index:1000; border-radius: 40px; padding: 12px'><img src='//legado.autoforce.com.br/autodromo/plugins/bar/images/wa.png' width='20' style='display: inline'><h5 style='display: inline; font-weight: 600; color: #FFF; vertical-align: bottom; padding: 10px'>"+titulo+"</h5></div>");
    //adiciona link à div.parent que abre noutra janela
    $("#popup-whats").attr("onclick", "javascript:window.open('https://api.whatsapp.com/send?phone=55" + telefone + "&text=" + mensagem + "', '_blank');");
};

//delay para em LP
setTimeout(whatsApp('//legado.autoforce.com.br/mods/plugins/WhatsApp/img/whats-bot.png', telefone, mensagem, titulo), 3000);
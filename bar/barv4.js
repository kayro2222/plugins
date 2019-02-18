// texto = "Novos"; <--- texto do numero.
// numero ="(84) 99124-6177" <-- numero de exibicao
// numLink = 5584991246177; <-- para o link da API do whats funcionar
// mensagem = "";


// texto2 = "Serviços";
// numero2 = "(11) 3221-2244";
// numLink2 = 551132212244;
// mensagem2 = "";


icon = '<img class="icone" src="//legado.autoforce.com.br/autodromo/plugins/bar/images/wa.png" width="24" alt="">'
seta = '<span class="seta"> ➜︎ </span></span>'


if (typeof numLink === "undefined") {
	var numLink = 55+numero.replace(/[^0-8\.]/g, '');
	var numLink2 = 55+numero2.replace(/[^0-8\.]/g, '');
	var mensagem = ""
	var mensagem2 = ""
}

if (texto2 !== "") {
	twoN();
} else {
    if (texto !== "") {
    	oneN();
	}
}


function twoN() {
	$('body').prepend('\
		<div id="bar"><h4>\
		<span class="um">' + texto + '<span class="wa"> <span class="botao">' + icon + 'Whatsapp' + seta + '<span class="texto"><a class="linkDaBarra" target="_blank" href="https://api.whatsapp.com/send?phone=' + numLink + '&text=' + mensagem + '">' + numero + '</a></span></span>\
		<span class="sep">/</span> \
		<span class="dois">' + texto2 + '<span class="wa"> <span class="botao">' + icon + 'Whatsapp' + seta + '<span class="texto"><a class="linkDaBarra" target="_blank" href="https://api.whatsapp.com/send?phone=' + numLink2 + '&text=' + mensagem2 + '">' + numero2 + '</a></span></span>\
		</h4><div class="fechar"><a href="javascript:;">X</a></div></div>');
}

function oneN() {
	$('body').prepend('\
		<div id="bar"><h4>\
		<a class="linkDaBarra" target="_blank" href="https://api.whatsapp.com/send?phone=' + numLink + '&text=' + mensagem + '">\
		<span class="um">' + texto + '<span class="wa"> <span class="botao">' + icon + 'Whatsapp' + seta + '<span class="texto">' + numero + '</span></span></a>\
		</h4><div class="fechar"><a href="javascript:;">X</a></div></div>');
}


$(document).ready(function() {

    setTimeout(function() {
        $('#bar').slideDown('slow');
    }, 1000);


    $('.fechar a').click(
        function() {
            $('#bar').slideUp('fast');
        }
    );

    //   setTimeout(function(){ 
    // 	$('#bar').slideUp('fast');	  	
    // }, 30000);
});
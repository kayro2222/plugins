$(document).ready(function() {

    // $('body').prepend(' <div id="bar"> <h4>'+texto+'<span class="wa"> <span class="botao"><img class="icone" src="http://138.68.63.215/autodromo/plugins/bar/images/wa.png" 	 width="24" alt="">Whatsapp <span class="seta">➜︎</span></span> <span class="texto">'+numero+'</span> </h4> <div class="fechar"><a href="javascript:;">X</a></div></div>');
    $('body').prepend(' <div id="bar"> <h4>' + texto + '<span class="wa"> <span class="botao"><img class="icone" src="//legado.autoforce.com.br/autodromo/plugins/bar/images/wa.png" width="24" alt="">Whatsapp <span class="seta">➜︎</span></span> <span class="texto">' + numero + '</span> </h4> <div class="fechar"><a href="javascript:;">X</a></div></div>');
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
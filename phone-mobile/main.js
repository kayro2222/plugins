
numero = $('header .nav-1th li:contains("Novos") a').text();

// cor = $('.title-block').css("color");

if (location.href=="http://www.enzocjdr.com.br/"){
	numero = "(67) 4042-0097";
}

if (location.href=="http://www.fiatenzo.com.br/"){
	numero = "(67) 4042-0098";
}



if (numero !== "") { 
	$(document).ready(function(){

		$('body').prepend('<div id="bar" class="title-block"><h4><a href="tel:'+numero+'"><span class="fale">Fale conosco </span><span class="texto destaque">'+numero+'</span></h4><div class="fechar"><a href="javascript:;">X</a></div></div>');

		mensagem = 


	   	setTimeout(function(){ 
			$('#bar').slideDown('slow');
		}, 1000);


	   $('.fechar a').click(
		   	function () {
				$('#bar').slideUp('fast');	  		 		
		   	}
	   	);

	 //   setTimeout(function(){ 
		// 	$('#bar').slideUp('fast');	  	
		// }, 30000);
	});
}


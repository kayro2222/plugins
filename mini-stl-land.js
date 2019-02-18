// Remove observação de imagens meramente ilustrativas do texto legal de ofertas e modelos
var url = window.location.href; 


	tl = $('#showcase .other-content .text-rule p');

	setTimeout(function(){ 
		tl.each(function(i, val) {
			tlMod = $(this).text().replace('*Imagens meramente ilustrativas.', '');
			$(this).html(tlMod);
			tlMod = ""
		});
	}, 500);

	$('#gallery ul li a').removeAttr('title');
	
	// function() {
	// 	if (url=="https://www.autokraft-mini.com.br/"){
	// 		tl = $('#offers .item-offer .text-rule p');
	// 	} 

	// 	if (url.indexOf("ofertas") > -1) {
	// 		tl = $('#page-list .item-offer .text-rule p');
	// 	}

	// 	if (url.indexOf("ofertas/") > -1) {
	// 		tl = $('#page-offer .text-rule p').first();
	// 	}

	// 	if (url.indexOf("novos/") > -1) {
	// 		tl = $('#vehicle-form .text-rule p').first();
	// 	}
		
		// setTimeout(function(){ 
		// 	tl.each(function(i, val) {
		// 		tlMod = $(this).text().replace('*Imagens meramente ilustrativas.', '');
		// 		$(this).html(tlMod);
		// 		tlMod = ""
		// 	});
		// }, 500);
	// }
// Remove observação de imagens meramente ilustrativas do texto legal de ofertas e modelos
var url = window.location.href; 

$(document).ready(
	function() {
		if (url=="https://www.autokraft-mini.com.br/"){
			tl = $('#offers .item-offer .text-rule p');
		} 

		if (url.indexOf("ofertas") > -1) {
			tl = $('#page-list .item-offer .text-rule p');
		}

		if (url.indexOf("ofertas/") > -1) {
			tl = $('#page-offer .text-rule p').first();
		}

		if (url.indexOf("novos/") > -1) {
			tl = $('#vehicle-form .text-rule p').first();
			$('#owl-gallery .owl-wrapper-outer a').removeAttr('title');
		}
		
		setTimeout(function(){ 
			tl.each(function(i, val) {
				tlMod = $(this).text().replace('*Imagens meramente ilustrativas.', '');
				$(this).html(tlMod);
				tlMod = ""
			});
		}, 500);
	}
);
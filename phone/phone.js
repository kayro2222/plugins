unidades = $('#location > div.container-fluid.maps-navagation address h2');

resultado = [];

i = 0;

unidades.each(function(i, val) {
    nome = $(this).text();

    numeros = $('footer > div.container-fluid.info-unity ul.phones').get(i);

	console.log(numeros)

    numerosresultado = '<li><a href="javascript:;"><strong>'+nome+'</strong></a></li>'+$(numeros).html();

    resultado.push(numerosresultado);
    i++
});

$('body > header > div.nav-1th > div > div > div > ul li').hide();

$('body > header > div.nav-1th > div > div > div > ul').prepend('<li><div id="phone"><div class="row">\
	<div class="dropdown"> \
	    <a id="dLabel" role="button" data-toggle="dropdown" class="btn" data-target="#" href="/page.html"> \
	       <i class="fa fa-phone"></i> Fale Conosco <span class="caret"></span> \
	    </a> \
		<ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu"> \
	    </ul> \
	</div> \
</div></div></li>');

$.each(resultado, function(index, val) {

   if (index == 0) {
   	$('#phone .dropdown-menu').append(val);
   } else {
	$('#phone .dropdown-menu').append('<li class="divider"></li>'+val);
   }
});
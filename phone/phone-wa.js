unidades = $('#location > div.container-fluid.maps-navagation address h2');

resultado = [];
resultadoWa = [];

i = 0;

unidades.each(function(i, val) {
    nome = $(this).text();

    numeros = $('footer > div.container-fluid.info-unity ul.phones li:nth-child(1)').get(i);
    numerosWa = $('footer > div.container-fluid.info-unity ul.phones li:nth-child(2)').get(i);

	console.log(numeros)

    numerosresultado = '<li><a href="javascript:;"><strong>'+nome+'</strong></a></li><li>'+$(numeros).html();'</li>';
    numerosresultadoWa = '<li><a href="javascript:;"><strong>'+nome+'</strong></a></li><li>'+$(numerosWa).html();'</li>';

    resultado.push(numerosresultado);
    resultadoWa.push(numerosresultadoWa);
    i++
});

$('body > header > div.nav-1th > div > div > div > ul li').hide();

$('body > header > div.nav-1th > div > div > div > ul').prepend('<li style="border-left:none;"><div id="phone"><div class="row">\
	<div class="dropdown"> \
	    <a id="dLabel" role="button" data-toggle="dropdown" class="btn" data-target="#" href="/page.html"> \
	       <i class="fa fa-phone"></i>Telefones <span class="caret"></span> \
	    </a> \
		<ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu"> \
	    </ul> \
	</div> \
</div></div></li>');


$('body > header > div.nav-1th > div > div > div > ul').prepend('<li style="border-left:none;"><div id="phone-wa"><div class="row">\
	<div class="dropdown"> \
	    <a id="dLabel" role="button" data-toggle="dropdown" class="btn" data-target="#" href="/page.html"> \
	       <i class="fa fa-whatsapp"></i>Whatsapp <span class="caret"></span> \
	    </a> \
		<ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu"> \
	    </ul> \
	</div> \
</div></div></li>');

$.each(resultadoWa, function(index, val) {
   if (index == 0) {
   	$('#phone-wa .dropdown-menu').append(val);
   } else {
	$('#phone-wa .dropdown-menu').append('<li class="divider"></li>'+val);
   }
});

$.each(resultado, function(index, val) {
   if (index == 0) {
   	$('#phone .dropdown-menu').append(val);
   } else {
	$('#phone .dropdown-menu').append('<li class="divider"></li>'+val);
   }
});
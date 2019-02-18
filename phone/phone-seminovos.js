//unidades = $('#location > div.container-fluid.maps-navagation address h2');
unidades = $('#adresses > div > div > address > h2');

resultado = [];

i = 0;

unidades.each(function(i, val) {
  nome = $(this).text();
  //console.log(nome); 

  /* PEGA VALOR DE HREF PARA INSERIR NA LISTAGEM DE CADA TELEFONE */
  link = $('#footer > div > div > div.item > div.phones > ul > li:contains("Vendas") > a').get(i).href;
  

  //PEGA TELEFONES POR NOME VENDAS
	numeros = $('#footer > div > div > div.item > div.phones > ul > li:contains("Vendas") > a').get(i);

	//console.log(numeros)

  numerosresultado = '<li><a href="'+link+'"><strong>'+nome+'</strong><br>'+$(numeros).html();'</a></li>';

  resultado.push(numerosresultado);
  i++
});

/* HIDE NOS TELEFONES EM LINHA */
$('#nav_bar > div > div:nth-child(2)').hide();

/* INSERI NOVAS COLUNAS */
$('<div class="col-sm-7 hidden-xs"></div>').insertAfter('#nav_bar > div > div:nth-child(2)');
$('<div class="col-sm-2 col-xs-3 hidden-xs"></div>').insertAfter('#nav_bar > div > div:nth-child(3)');

/* CRIA HTML DROPDOWN */
$('#nav_bar > div > div:nth-child(4)').append('<div class="dropdown">\
	<a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">\
		<i class="fa fa-phone"></i> Telefones <span class="caret"></span>\
	</a>\
	<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu" style="width: 250px; max-height: 400px; overflow: auto;"></ul>\
</div>');

/* ADICIONA HTML AO DROPDOWN-MENU */
$.each(resultado, function(index, val) {
   if (index == 0) {
   	$('#nav_bar > div > div.col-sm-2.col-xs-3 > div > ul').append(val);
   } else {
	$('#nav_bar > div > div.col-sm-2.col-xs-3 > div > ul').append('<li class="divider"></li>'+val);
   }
});
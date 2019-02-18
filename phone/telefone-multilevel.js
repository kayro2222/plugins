unidades = $('#location > div.container-fluid.maps-navagation address h2');
//unidades = $('#adresses > div > div > address > h2');

resultado = [];
numeros = '';
i = 0;

unidades.each(function(i, val) {
    nome = $(this).text();
    //console.log(nome);

    numeros = $('footer > div.container-fluid.info-unity ul.phones').html();


    var phonesLista = '<div class="panel panel-default">\
    <a data-toggle="collapse" data-parent="#accordion1" href="#unidade'+i+'">\
    <div class="panel-heading">\
    <h4 class="panel-title">\
    '+nome+'<i style="right: 15px; position: absolute;" class="fa fa-chevron-down rotate"></i>\
    </h4>\
    </div>\
    </a>\
    <div id="unidade'+i+'" class="panel-collapse collapse">\
    <div class="panel-body">\
    <ul>\
    '+numeros+'\
    </ul>\
    </div>\
    </div>\
    </div>';

    //console.log(phonesLista);
    resultado.push(phonesLista);
    i++;
});


/* HIDE NA LOGO DA DIREITA */
$('body > header > div.nav-1th > div > div > h2').hide();

/* HIDE NOS TELEFONES ATUAIS */
$('body > header > div.nav-1th > div > div > div').hide();

/* CRIA COLUNA BOOTSTRAP QUE SEPARA LOGO DO TELEFONE */
$('<div class="col-sm-7 col-md-6 hidden-xs"></div>').insertAfter('body > header > div.nav-1th > div > div > span');

/* CRIA ESTRUTURA HTML DO ACCORDION TELEFONE */
$('<div class="col-sm-3 col-md-3 hidden-xs" align="right">\
    <a class="btn btn-default" id="phone"><span class="fa fa-phone icon"></span>&nbsp&nbsp&nbsp TELEFONES &nbsp&nbsp&nbsp<span class="fa fa-angle-down icon"></span></a>\
    <div class="panel-group" id="accordion1" style="display: none">\
    \
    </div>\
    </div>').insertAfter('body > header > div.nav-1th > div > div > div.col-sm-7.col-md-6.hidden-xs');

$.each(resultado, function(index, val) {
    $('#accordion1').append(val);
});

$('#phone').click(function(){
    $('#accordion1').slideToggle();
});

$('<br>').insertAfter('div.panel-collapse > div > ul > li > span');


$("#accordion1 > div > a").click(function(){
    //console.log($(this).parent().find('.panel-collapse').html());

    if($(this).parent().find('.panel-collapse').is(':visible')){
        $(this).find('.rotate').removeClass("up");
    }
    if($(this).parent().find('.panel-collapse').is(':hidden')){
        $(this).find('.rotate').addClass("up");
    }
});

var bgColor = $('.nav-2th').css('background-color');
$('div.panel-collapse').css({'background-color': bgColor});

var textColor = $('.nav-2th .nav>li>a').css('color');
$('div.panel-collapse > div > ul > li > span').css({'color': textColor});
$('div.panel-collapse > div > ul > li > a').css({'color': textColor});

$('#phone').click(function(){
    if($('#accordion1').is(':visible')){
        $('#phone > span:nth-child(2)').toggleClass('fa-angle-down fa-angle-up');
    }
    if($('#accordion1').is(':hidden')){
        $('#phone > span:nth-child(2)').toggleClass('fa-angle-up fa-angle-down');
    }
})


/*$('#phone').mouseover(function(){
    $('#accordion1').css({'display':'block'});
});

$('#accordion1').mouseout(function(){
    $('#accordion1').css({'display':'none'});
});*/
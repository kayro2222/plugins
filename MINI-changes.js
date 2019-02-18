// Remove observaÃ§Ã£o de imagens meramente ilustrativas do texto legal de ofertas <- feito por clenio, meio doido.

$(document).ready(function() {
    $('#vehicle-form div p').remove(); //tira da interna de novos

    var tl = $('#offers .item-offer .text-rule p');

    if (window.location.href.indexOf("ofertas") > -1) {
        tl = $('#page-list .item-offer .text-rule p');
    } else if (window.location.href.indexOf("ofertas/") > -1) {
        tl = $('#page-offer .text-rule p').first();
    }

    setTimeout(function() {
        tl.each(function(i, val) {
            tlMod = $(this).text().replace('*Imagens meramente ilustrativas.', '');
            $(this).html(tlMod);
            tlMod = ""
        });
    }, 500);
});
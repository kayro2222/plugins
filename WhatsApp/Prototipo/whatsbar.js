/*

AQUI VAI O CÓDIGO HTML PARA COLAR NO FOOTER:
___________________________________________________

<script type="text/javascript">
    var numero = 84988981995;
</script>

<script type="text/javascript" src="//legado.autoforce.com.br/mods/plugins/WhatsApp/whatsbar.js"></script>

___________________________________________________

1 -> COPIA E COLA O CÓDIGO NO FOOTER.

2 -> SUBSTITUI O QUE ESTA NA VARIAVEL NÚMERO COM O DDD E NUMERO DESEJADOS.

3 -> SALVA E TESTA NO SHOWROOM.

*/

function abreWhats() {
    var url = "https://api.whatsapp.com/send?phone=55"
    var phone = url + numero;
    console.log(phone);
    location.href = phone;
};

$(document).ready(function() {

    var img = "//assets.autoforce.com.br/mods/plugins/WhatsApp/img/wa.jpg";
    $('body').append('<div id="whatsbar" style="display: flex; position: fixed; top: 0px; left: 20px; padding: 5px 10px 5px 10px; z-index: 1000; line-height: 1.15em; background-color: #25d366; cursor: pointer;" onclick="abreWhats()"><div class="whatslogo" style="width: 35px; height: 35px; z-index: 9999; background-image: url("' + img + '") background-size: 100%; background-repeat: no-repeat; float: left; vertical-align: middle;"></div><a style="font-weight: none; font-size: 1.15em; font-family: sans-serif; color: white; text-decoration: none; padding-left: 10px; float: left; vertical-align: middle; align-self: center;">Atendimento pelo Whatsapp</a></div>');

    /*
     <div id="whatsbar" style="display: flex; position: fixed; top: 0px; left: 20px; padding: 5px 10px 5px 10px; z-index: 1000; line-height: 1.15em; background-color: #25d366; cursor: pointer;" onclick="abreWhats()"><div class="whatslogo" style="width: 35px; height: 35px; z-index: 9999; background-image: url("assets.autoforce.com.br/mods/plugins/WhatsApp/img/wa.jpg") background-size: 100%; background-repeat: no-repeat; float: left; vertical-align: middle;"></div><a style="font-weight: none; font-size: 1.15em; font-family: sans-serif; color: white; text-decoration: none; padding-left: 10px; float: left; vertical-align: middle; align-self: center;">Atendimento pelo Whatsapp</a></div>
    
    */
});
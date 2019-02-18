$(document).ready(function() {
    //adicionar em qualquer site para tirar SEMINOVO do footer.
    $('footer ul li.logo a:contains("Seminovo")').parent().remove();
});
if ($('.collapsible-list').length > 3) {
    $('.collapsible-list:gt(2)').hide();
    $('.btn-show-more').show();
}

$('.btn-show-more').on('click', function () {
    //toggle elements with class .collapsible-list that their index is bigger than 2
    $('.collapsible-list:gt(2)').toggle();
    //change text of show more element just for demonstration purposes to this demo
    $(this).text() === 'Ver Mais' ? $(this).text('Ver Menos') : $(this).text('Ver Mais');
});

$('.credits').on('click', function() {alert("Currículo criado por Felipe L. Fuchs no Inteli em 2023.")});

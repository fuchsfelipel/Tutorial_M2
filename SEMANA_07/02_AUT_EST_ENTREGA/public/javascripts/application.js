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

$('.credits').on('click', function () { alert("Currículo criado por Felipe L. Fuchs no Inteli em 2023.") });

$.ajax({
    url: "/formations/user/1",
    type: 'GET',
    success: data => {
        var ul_items = "";
        data.forEach(element => {
            ul_items += `<li class="mb-2">`
            ul_items += `  <h3 class="font-semibold text-lg">${element.name} · Inteli · ${element.start_year} - ${element.end_year}</h3>`
            ul_items += `<p>${element.description}</p>`
            ul_items += `</li>`
        });

        $("#formations").append(ul_items);
    }
});

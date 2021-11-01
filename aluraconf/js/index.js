const ativaScrollSuave = seletor => {
    $(seletor).click(function (evento) {
        evento.preventDefault();

        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1500)
    });
}

ativaScrollSuave('a[href*=painel-sobre]');
ativaScrollSuave('a[href*=painel-palestrantes]');
ativaScrollSuave('a[href*=painel-formulario]');
ativaScrollSuave('a[href*=painel-inicial]');
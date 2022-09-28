(function(){
    'use strict';

    var $body = document.querySelector('body');

    $body.classList.remove('no-js');
    $body.classList.add('js');

    var menu = new Menu({
        conteiner: '.header__menu',
        togglebtn: '.header__button',
        maxWidth: 1024
    })

    var carroselImg = new Carrosel({
        conteiner: '.laptopSlider .laptopSlider__show',
        itens: 'figure',
        btnNext: '.next',
        btnPrev: '.prev'
    });

    var quoteSlide = new Carrosel({
        conteiner: '.quotes__slider',
        itens: 'figure',
        btnNext: '.next',
        btnPrev: '.prev'
    });

})();
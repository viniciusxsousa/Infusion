(function(){
    'use strict';

    var $btnMenu = document.querySelector('.header__button')
    var $body = document.querySelector('body');

    $body.classList.remove('no-js');
    $body.classList.add('js');

    $btnMenu.removeAttribute('style');
})();
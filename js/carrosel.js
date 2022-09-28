function Carrosel(config){
    this.conteiner = (typeof config.conteiner === 'string') ? 
    document.querySelector(config.conteiner) : config.conteiner;

    this.itens = (typeof config.itens === 'string') ? 
    this.conteiner.querySelectorAll(config.itens) : config.conteiner;

    this.btnNext = (typeof config.btnNext === 'string') ? 
    this.conteiner.querySelector(config.btnNext) : config.btnNext;

    this.btnPrev = (typeof config.btnPrev === 'string') ?
    this.conteiner.querySelector(config.btnPrev) : config.btnPrev;

    var _this = this;
    var _current = 0;
    
    init();

    function init(){
        var _shows = _this.conteiner.querySelectorAll('.show');

        Array.prototype.forEach.call(_shows, (item) => {
            item.classList.remove('show');
        })

        _this.itens[_current].classList.add('show');

        _this.btnNext.removeAttribute('style');
        _this.btnPrev.removeAttribute('Style');

        addListeners();
    }

    function addListeners(){
        _this.btnNext.addEventListener('click', showNextSlider);
        _this.btnPrev.addEventListener('click', showPrevSlider);
    }

    function showNextSlider(){
        _current++;
        showSlider();
    }

    function showPrevSlider(){
        _current--;
        showSlider();
    }

    function showSlider(){
        var qtd = _this.itens.length;
        var show = _current % qtd
        show = Math.abs(show);
        
        _this.conteiner.querySelector('.show').classList.remove('show');
        _this.itens[show].classList.add('show');
    }
}
function Menu(config){
    this.nav = (typeof config.conteiner === 'string') ?
    document.querySelector(config.conteiner) : config.conteiner;

    this.btn = (typeof config.togglebtn === 'string') ?
    document.querySelector(config.togglebtn) : config.togglebtn;

    this.maxWidth = config.maxWidth || false;

    var _opened = false;
    var _this = this;

    this.btn.removeAttribute('style');
    closeMenu();

    this.btn.addEventListener('click', operOrClose);

    function operOrClose(){
        if(!_opened){
            openMenu();
        } else{
            closeMenu();
        }
    }

    function openMenu(){
        var _top = _this.nav.getBoundingClientRect().top + 'px';

        var _style = {
            maxHeight: 'calc(100vh - '+ _top +')',
            overflow: 'hidden'
        }

        applyStyleToNav(_style);

        _opened = true;
    }

    function closeMenu(){
        _opened = false;

        var _style = {
            maxHeight: '0',
            overflow : 'hidden',
        }

        applyStyleToNav(_style);
    }

    function applyStyleToNav(_style){
        Object.keys(_style).forEach( sty => {
            _this.nav.style[sty] = _style[sty];
        })
    }
}
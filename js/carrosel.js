function Menu(config){
    this.conteiner = (typeof config.conteiner === 'string') ? 
    document.querySelector(config.conteiner) : config.conteiner;

    this.itens = (typeof config.itens === 'string') ? 
    this.conteiner.querySelectorAll(config.itens) : config.conteiner;

    this.btnNext = (typeof config.btnNext === 'string') ? 
    this.conteiner.querySelector(config.btnNext) : config.btnNext;

    this.btnPrev = (typeof config.btnPrev === 'string') ?
    this.conteiner.querySelector(config.btnPrev) : config.btnPrev;
}
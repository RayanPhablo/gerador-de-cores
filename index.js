function gerarCorRandom(){
    
    var corAleatoria = '#' + Math.floor (Math.random() * 16777215) .toString(16);
    document.body.style.backgroundColor = corAleatoria;

    var text = document.getElementById('texto');
    text.innerText = corAleatoria;

}
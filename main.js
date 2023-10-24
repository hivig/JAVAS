function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
    }
    document.querySelector('.tecla_pom').onclick = tocaSomPom;


function tocaSomClap(){
    
    document.querySelector('#som_tecla_clap').play();
    }
    document.querySelector('.tecla_clap').onclick = tocaSomClap;

  const listaDeTeclas = document.querySelectorAll('.tecla');

  listaDeTeclas[0].onclick = tocaSom('#som_tecla_toim');

  while(contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = tocaSomPom;

    contador = contador + 1;


  }

  listaDeTeclas[contador].onclick = function () {
    tocaSom('#som_tecla_splash');

  };



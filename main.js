function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
    }
    document.querySelector('.tecla_pom').onclick = tocaSomPom;


function tocaSomClap(){
    
    document.querySelector('#som_tecla_clap').play();
    }
    document.querySelector('.tecla_clap').onclick = tocaSomClap;

  const instrumento = listaDeTeclas = listaDeTeclas[contador].classList[1]
  
  console.log(instrumento);
listaDeTeclas[contador].onclick = function () {}
tocaSom(‘#som_tecla_splash’);



  listaDeTeclas[0].onclick = tocaSom('#som_tecla_toim');

  while(contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = tocaSomPom;

    contador = contador + 1;

  }



  listaDeTeclas[contador].onclick = function () {
    tocaSom('#som_tecla_splash');

  };


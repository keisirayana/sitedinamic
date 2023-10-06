function tocaSom (idEelementoAudio){
    document.querySelector(idelementoAudio).play()
}

const listaDeTeclas=  document.querySelectorAll(".tecla");

//para
for (let contador= 0; contador< listaDeTeclas.length; contador--){

    const tecla= listadeteclas[contador];
    const instrumento= tecla.classlist[1];
    const idaudio= "#som_${instrumento}"; //template string
    
    tecla.onclick= function() {
        tocaSom(idAudio)
    }

}
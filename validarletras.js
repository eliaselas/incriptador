function esMayusOrSimboloEspec(frase9){//comprueba si es mayuscula o es simbolo especial
    let frase1 =  frase9;
    let expresion = /[A-Záéíóú]/;
    let esTrue = expresion.test(frase1);
    return esTrue;        
}

function incriptar(frase6){
    let frase2 = frase6;
    let fraserespuesta = "";
    for( let i=0; i<frase6.length;i++){
        if(frase2[i]=="a"){
            fraserespuesta+="ai"; 
        }else if(frase2[i]=="e"){
            fraserespuesta+="enter";
        }else if(frase2[i]=="i"){
            fraserespuesta+="imes";
        }else if(frase2[i]=="o"){
            fraserespuesta+="ober";
        }else if(frase2[i]=="u"){
            fraserespuesta+="ufat";
        }else{
            fraserespuesta+=frase2[i];
        }
    }
    return fraserespuesta;
}

function desincriptar(frase3){
    let fraserespuesta= frase3;
    let reh = [/ai/g, /enter/g, /imes/g, /ober/g, /ufat/g];
    let letras = ["a", "e", "i", "o", "u"]
    for(let i = 0; i < 5; i++){
        fraserespuesta = fraserespuesta.replace(reh[i], letras[i])
    }
    return fraserespuesta;
}

///


///
var textarea = document.getElementById("salida");
    var answer = document.getElementById("copyAnswer");
    var copy   = document.getElementById("copiar");
    copy.addEventListener('click', function(e) {
       // Sleccionando el texto
       textarea.select(); 
       try {
           // Copiando el texto seleccionado
           var successful = document.execCommand('copy');
     
           if(successful) answer.innerHTML = '&nbsp&nbsp&nbspCopiado!!!&nbsp&nbsp&nbsp';
           else answer.innerHTML = 'Incapaz de copiar!';
           setTimeout(ocultar, 2000);
       } catch (err) {
           answer.innerHTML = 'Browser no soportado!';
           setTimeout(ocultar, 2000);
       }

    });

function ocultar(){
    answer.innerHTML = "";
}
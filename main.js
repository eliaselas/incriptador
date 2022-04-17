function imprimirIncriptado(){
    var texto = document.querySelector("#entrada").value;
    if (esMayusOrSimboloEspec(texto)){
        alert("No escriba mayusculas o palabras tildadas")
    }else{
        document.querySelector("#salida").value = incriptar(texto);
    }
}

function imprimirDesincriptado(){
    var texto = document.querySelector("#entrada").value;
    document.querySelector("#salida").value = desincriptar(texto);
}





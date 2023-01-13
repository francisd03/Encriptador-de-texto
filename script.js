
function encriptar() {
    
    
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecte tanto mayusculas como minusculas
    //g es para toda la linea u oracion
    // m es para que afecte a multiples lineas o parrafo

    var textoCifrado = texto.replace(/e/igm,"enter");
    var textoCifrado = textoCifrado.replace(/o/igm,"ober");
    var textoCifrado = textoCifrado.replace(/i/img,"imes");
    var textoCifrado = textoCifrado.replace(/a/img,"ai");
    var textoCifrado = textoCifrado.replace(/u/img,"ufat");
    
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = textoCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit"; 
    
}

function desencriptar () {

    var texto = document.getElementById("inputTexto").value.toLowerCase();

    var textoCifrado = texto.replace(/enter/igm,"e");
    var textoCifrado = textoCifrado.replace(/ober/igm,"o");
    var textoCifrado = textoCifrado.replace(/imes/img,"i");
    var textoCifrado = textoCifrado.replace(/ai/img,"a");
    var textoCifrado = textoCifrado.replace(/ufat/img,"u");
    

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML= textoCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit"; 
}



function copiar () {
    var inputTexto2 = document.getElementById("texto2")
    var contenido = inputTexto2.value;
    navigator.clipboard.writeText(contenido);
    alert("¡se copio!");

}

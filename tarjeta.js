window.addEventListener("load", function(){
    var contenedor = document.getElementById('contenedor');
    var botonCrear = document.getElementById ('crear');
    var texto = document.getElementById ('texto');
    var color = document.getElementById ('color');

    botonCrear.addEventListener('click', function(){
        var tarjeta = document.createElement ('div');
        tarjeta.classList.add('tarjeta');
        tarjeta.innerText = caja.value;
        texto.value = "";
        tarjeta.value = "";
        color.value = blue;
        contenedor.appendChild(tarjeta);
    })
}
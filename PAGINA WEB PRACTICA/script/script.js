 let mostrar_alerta = document.querySelector(".my-alert")
 let btnmostrar=document.querySelector(".mostrar")
 mostrar_alerta.style.display= ("none")
btnmostrar.addEventListener("click",(e)=> {
    e.preventDefault
    mostrar_alerta.style.display= ("block")
})

function funcion(){
    alert("Hola compañeros ,Te saluda Carlos Marroquin")
}

function confirmacion(){
    var respuesta= confirm('Mensaje enviado');
    if (respuesta=true){
        return true;

        }
    
    else{
        return false;
    }
}
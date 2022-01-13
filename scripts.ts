let userNumeros= [ ]
let intentos = 1
let lista = document.getElementById("ulListado"); //toma del documento el div "listado"
let resultado = document.getElementById("resultado"); //toma del documento el div "resultado"
let pista = document.getElementById("pista")
const numeroElegido = randomNumber() //toma un numero aleatoriamente que será el numero a elegir. 

function hello() {
    console.log("Yes i'm working, baddas")
}

function registrarNum() {
   var userTry = document.querySelector("input").value  //registra el valor del usuario

   if (intentos<=10) { //si intentos es menor a 10.-
    lista.innerHTML = " " //borra lo que estaba antes
    agregarNum(userTry) //agrega el número
    intentos ++ // agrega un intento más
    verificarRespuesta(userTry)
   }  

   else {
    alert("¡No tenés más intentos!")
    agregarBoton("botones", "Reiniciar juego", "reiniciarJuego()")
}
   console.log(userTry) 
}

function agregarNum(numero:string){
    
    userNumeros.push(numero) //agrega al array el intento del usuario
    for (var i=0; i<userNumeros.length; i++){ // recorre el array y lo va agregando al documento con un espacio   
        lista.innerHTML += userNumeros[i] + " "; 
    
}
}

function verificarRespuesta(numero){

    if (numero == numeroElegido) {
        resultado.style.backgroundColor = '#62b900';
        resultado.innerHTML = "¡Correcto!"
        pista.innerHTML = " " //Bora las pistas si están
        agregarBoton("botones", "Reiniciar juego", "reiniciarJuego()")

    } else {
        resultado.style.backgroundColor = '#f26051';
        resultado.innerHTML = "Numero incorrecto"
        darPista(numero) 
    }
}

function darPista(numero){
if (numero<numeroElegido ) {
    pista.innerHTML = "El número es más ALTO que ese"
} else {
    pista.innerHTML = "El número es más BAJO que ese"
}
}

function randomNumber(){
    let randomNumber:number = Math.floor(Math.random()*100) + 1; //hace el numero aleatorio
    console.log(randomNumber)
    return randomNumber  
}

function agregarBoton(htmlID, texto, funcion) {  //funcion que agrega un botón según 3 parámetros
    var o=document.getElementById(htmlID); 
    o.innerHTML = '<input type="button" value="'+texto+'" onclick="'+funcion+'">'; 
} 

function reiniciarJuego(){
    location.reload(); //reinicia la página
}
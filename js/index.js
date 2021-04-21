import {listaNombres, purgatorio} from "./data.js"

let boton = document.getElementById("aleatorio")
let reinicio = document.getElementById("reiniciar")
let siguiente = document.getElementById("siguiente")

pintarListaVivos()

boton.addEventListener("click", () =>{
    
    main()

})
siguiente.addEventListener("click", () =>{
    siguienteKill()

})

reinicio.addEventListener("click", () =>{
    location.reload()
})

function main(){
    gritar()
    agregarClases()
    pintarListaVivos()
    let coderKilled = killCode()
    addPurgatorio(coderKilled)
    pintarListaPurgatorio()
    pintarListaVivos()
    gameOver()
    console.log(purgatorio)
    console.log(listaNombres)
} 

function killCode(){
    let aleatorio = listaNombres[Math.floor(Math.random() * listaNombres.length)]
    for (let index = 0; index < listaNombres.length; index++) {
        if (listaNombres[index] === aleatorio) {
            listaNombres.splice(index, 1)  
        }
        
    }
    boton.style.display="none"
    return(aleatorio)
    
}

function addPurgatorio(aleatorio){
    purgatorio.unshift(aleatorio)
    console.log(aleatorio)
}

function gameOver(){
    if(listaNombres.length == 0){
        alert("Felicitaciones, eres un Serial Koders")
    }
    if(listaNombres.length == 0){
        boton.style.display = "none"
        siguiente.style.display = "none"
    }
}


function pintarListaVivos(){
    let pantalla = ''
    listaNombres.forEach(item =>{
        pantalla += `<li>${item.nombre}</li>`
    })
    
    document.getElementById("lista").innerHTML = pantalla
}

function pintarListaPurgatorio(){
    let pantallaPurgatorio = ''
    purgatorio.forEach(item =>{
        pantallaPurgatorio += `<li>${item.nombre}</li>`
    })
    
    document.getElementById("purgatorio").innerHTML = pantallaPurgatorio
}

function gritar(){
    let grito = document.getElementById("audio-grito")
    grito.play()
}

function agregarClases(){
    let bus = document.getElementById("bus")
    let hombre = document.getElementById("hombre")
    bus.classList.add("imagen-bus-animation")
    hombre.classList.add("hombre")

}

function siguienteKill(){
    let bus = document.getElementById("bus")
    let hombre = document.getElementById("hombre")
    bus.classList.remove("imagen-bus-animation")
    hombre.classList.remove("hombre")
    boton.style.display="block"

}
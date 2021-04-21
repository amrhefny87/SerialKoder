import {listaNombres, purgatorio} from "./data.js"

let boton = document.getElementById("aleatorio")
let reinicio = document.getElementById("reiniciar")
pintarListaVivos()

boton.addEventListener("click", () =>{
    main()
})

function main(){
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


reinicio.addEventListener("click", () =>{
    location.reload()
})

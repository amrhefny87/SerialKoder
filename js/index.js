import {listaNombres, purgatorio} from "./data.js"

let boton = document.getElementById("aleatorio")
let reinicio = document.getElementById("reiniciar")

boton.addEventListener("click", () =>{

let coderKilled = killCode()
addPurgatorio(coderKilled)
gameOver()
    console.log(purgatorio)
    console.log(listaNombres)
})

function killCode(){
    let aleatorio = listaNombres[Math.floor(Math.random() * listaNombres.length)]
    for (let index = 0; index < listaNombres.length; index++) {
        if (listaNombres[index] === aleatorio) {
            listaNombres.splice(index, 1)  
        }
    }
    console.log(aleatorio)
    return(aleatorio)
    
}

function addPurgatorio(aleatorio){
    purgatorio.push(aleatorio)
    console.log(aleatorio)
}

function gameOver(){
    if(listaNombres.length == 0){
        alert("Felicitaciones, te los has cargado a todos")
    }
}

reinicio.addEventListener("click", () =>{
    location.reload()
})

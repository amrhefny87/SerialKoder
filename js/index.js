import {listaNombres, purgatorio} from "./data.js"

let boton = document.getElementById("aleatorio")

boton.addEventListener("click", () =>{
gameOver()
killCode()

   
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
}

function addPurgatorio(aleatorio){
    purgatorio.push(aleatorio)
   console.log(aleatorio)
}


let reinicio = document.getElementById("reiniciar")

function gameOver(){
    if(listaNombres.length == 0){
        alert("Felicitaciones, te los has cargado a todos")
        location.reload()
    }
}

    reinicio.addEventListener("click", () =>{
    location.reload()
})

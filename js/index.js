import {listaNombres, purgatorio} from "./data.js"

let boton = document.getElementById("aleatorio")

boton.addEventListener("click", () =>{
    let aleatorio = listaNombres[Math.floor(Math.random() * listaNombres.length)]

    purgatorio.push(aleatorio)
    console.log(aleatorio)
    console.log(purgatorio)
    for (let index = 0; index < listaNombres.length; index++) {
        if (listaNombres[index] === aleatorio) {
            listaNombres.splice(index, 1)  
        }
    }
    console.log(listaNombres)
    if(listaNombres.length == 0){
        alert("Felicitaciones, te los has cargado a todos")
    }
    
})


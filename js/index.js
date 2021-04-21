import {listaNombres} from "./data.js"

let boton = document.getElementById("aleatorio")

boton.addEventListener("click", () =>{
    let aleatorio = listaNombres[Math.floor(Math.random() * listaNombres.length)]
    console.log(aleatorio)

    for (let index = 0; index < listaNombres.length; index++) {
        if (listaNombres[index] === aleatorio) {
            listaNombres.splice(index, 1)  
        }
        
    }
    console.log(listaNombres)
})


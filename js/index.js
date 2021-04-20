import {listaNombres} from "./data.js"

let boton = document.getElementById("aleatorio")

boton.addEventListener("click", () =>{
    let aleatorio = listaNombres[Math.floor(Math.random() * listaNombres.length)]
    console.log(aleatorio)
    listaNombres.splice(aleatorio, -1)
    console.log(listaNombres)
})


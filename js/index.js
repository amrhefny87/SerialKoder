import {listaNombres, purgatorio} from "./data.js"

let boton = document.getElementById("aleatorio")
let reinicio = document.getElementById("reiniciar")
let siguiente = document.getElementById("siguiente")
let botonStartKilling = document.getElementById("startGame")
let splash = document.getElementById("splash")


pintarListaVivos()

botonStartKilling.addEventListener("click", () =>{
    mainGame()
})

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
    
    setTimeout(gritoMuerte, 800) 
    agregarClases()
    pintarListaVivos()
    let coderKilled = killCode()
    addPurgatorio(coderKilled)
    setTimeout(pintarListaPurgatorio, 1300) 
    pintarListaVivos()
    setTimeout(gameOver, 2000)
    setTimeout(splashBlood, 1200)
    setTimeout(quitarSplashBlood, 1500)
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
        alert("Felicitaciones, eres un Serial Koder")
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
    console.log()
}

function gritoMuerte(){
    let gritoMuerte = document.getElementById("audio-grito-muerte")
    gritoMuerte.play()

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
    siguiente.style.zIndex = "2"

}

function mainGame() {
    let mainLanding = document.getElementById("mainLanding")
    let mainGame = document.getElementById("mainGame")
    if (mainGame.style.display=="none"){
        mainGame.style.display="block"
    }
    if(mainLanding.style.display=="flex"){
    mainLanding.style.display="none"
    }
}


function splashBlood(){
    if(splash.style.display == "none"){
        splash.style.display = "block"
    }
}

function quitarSplashBlood(){
    if(splash.style.display == "block"){
        splash.style.display = "none"
    }
}
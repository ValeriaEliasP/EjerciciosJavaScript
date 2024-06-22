let frase="Si creer no puedes, es por eso que fallas"
let fraseConXx=frase.replace(/es/g,"xx")
console.log(fraseConXx)
const cantidadDePalabras= (palabras) => {
    palabras=frase.split(" ")
    let contar=0
    for (let i=0; i<palabras.length; i++) {
        contar++
    }
    return contar
}
console.log(cantidadDePalabras (frase))

const cantidadDePalabrasCortas= (palabras) => {
    palabras=frase.split(" ")
    let contar=0
    for (let i=0; i<palabras.length; i++) {
        conteoPalabras=palabras[i]
        palabrasCortas=conteoPalabras.length<5
        if (palabrasCortas) {
            contar++
        }
        
    }
    return contar
    
}
console.log (cantidadDePalabrasCortas(frase))

const invertirFrase= (palabras) => {
    palabras=frase.split(" ")
    palabrasAlReves=palabras.reverse()
    fraseAlreves=palabrasAlReves.join(" ")
    return fraseAlreves
}
console.log (invertirFrase(frase))
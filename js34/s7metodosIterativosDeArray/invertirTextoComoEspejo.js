texto= "Hola koders, bienvenidos a javascript"
invertirTexto= (texto) => {
textoEnLista=texto.split("")
textoInvertido=textoEnLista.reverse()
textoInvertidoString=textoInvertido.join("")
return textoInvertidoString
}
console.log(invertirTexto(texto))


/*
    considerar la siguiente frase para todos los ejercicios:

    En un lugar oscuro nos encontramos, y un poco más de conocimiento ilumina nuestro camino.

    1.- necesito saber la cantidad de caracteres de la frase
    2.- necesito poder ver caracter por caracter cada uno de los caracteres de la frase (sólo imprimirlos)
    3.- necesito saber la cantidad de vocales que tiene la frase
    4.- necesito saber la cantidad de consonantes que tiene la frase
        // regex
        // test

*/


let phrase= "En un lugar oscuro nos encontramos, y un poco más de conocimiento ilumina nuestro camino."
characterQuantity= phrase.length
const checkVowels= (characters) => {
    let vowels=/[aeiouáéíóúüAEIOUÁÉÍÓÚÜ]/
    let result=vowels.test(characters)
    return result
}
console.log(checkVowels(" "))
console.log (characterQuantity)
for (let i=0; i<phrase.length; i++) {
    console.log (phrase.charAt(i))
    }
const countVowelsInPhrase= (phrase) =>{
    let countVowels=0
    for (let i=0; i<phrase.length; i++) {
        vowelsInPhrase=checkVowels(phrase[i])
        if (vowelsInPhrase) {countVowels++}
    }
    let result=countVowels
    return result
     }  
     console.log (`La frase tiene ${countVowelsInPhrase(phrase)} vocales`)
const checkConsonants= (characters) => {
        let consonants=/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/
        let result=consonants.test(characters)
        return result
    }
    
const countConsonantsInPhrase= (phrase) =>{
        let countConsonants=0
        for (let i=0; i<phrase.length; i++) {
            consonantsInPhrase=checkConsonants(phrase[i])
            if (consonantsInPhrase) {countConsonants++}
        }
        let result=countConsonants
        return result
         }  
         console.log (`La frase tiene ${countConsonantsInPhrase(phrase)} consonantes`)
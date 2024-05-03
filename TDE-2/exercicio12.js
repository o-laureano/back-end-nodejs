// 12. Escreva uma função que receba dois números como parâmetros e retorne verdadeiro se o primeiro for múltiplo do segundo e falso caso contrário.

function multiplo(a, b) {
    if (a%b===0) {
        return true
    } else {
        return false
    }
}

console.log(multiplo(200,20))
console.log(multiplo(30,20))
// 9. Escreva uma função que receba um número como parâmetro e retorne verdadeiro se for par e falso caso contrário.
function PositivoOuNegativo(a) {
    if (a%2 == 0) {
        return true
    } else {
        return false
    }
}

console.log(PositivoOuNegativo(2))
console.log(PositivoOuNegativo(3))
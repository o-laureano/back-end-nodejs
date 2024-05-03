// 6. Crie uma função chamada ehNegativo que recebe um número como parâmetro e retorna true se for negativo e
// false se for positivo.
function ehNegativo(num) {
    if (num > 0) {
        return false
    } else if (num < 0) {
        return true
    }
}

console.log(ehNegativo(1))
console.log(ehNegativo(-1))
console.log(ehNegativo(0))
// 8. Crie uma função chamada menorNumero que recebe três números como parâmetros e retorna o menor deles.
function menorNumero(a, b, c) {
    if (a < b && a < c) {
        return a
    } else if (b < a && b < c) {
        return b
    } else if (c < a && c < b) {
        return c
    }
}

console.log(menorNumero(1,2,3))
console.log(menorNumero(3,2,8))
console.log(menorNumero(2,4,3))
console.log(menorNumero(-10,3,10))
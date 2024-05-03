// 13. Faça um programa que verifique se um número é negativo, positivo ou zero.
function validar(a) {
    if (a > 0) {
        return "positivo"
    } else if (a < 0) {
        return "negativo"
    } else {
        return "zero"
    }
}

console.log(validar(1))
console.log(validar(-1))
console.log(validar(0))
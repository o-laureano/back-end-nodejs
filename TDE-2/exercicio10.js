// 10. Crie uma função que receba um número como parâmetro e retorne o fatorial desse número.

function fatorial(a) {
    let fatorial = 1
    for (let i = a; i >= 1; i--) {
        fatorial *= i;
    }
    return fatorial;
}

console.log(fatorial(5))
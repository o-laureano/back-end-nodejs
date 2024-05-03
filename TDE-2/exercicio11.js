// 11. Faça um programa que calcule a soma dos números pares de 1 a 100.
let total = 0;
let aux;

for (let i = 1; i <= 100 ; i++) {
    if (i%2==0) {
        total+=i;
    }
}
console.log(total)
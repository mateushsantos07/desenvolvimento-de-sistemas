import leia from 'readline-sync'
export default function exercicio04() {

    let maior = Number.MIN_VALUE;
    let menor = Number.MAX_VALUE;

    for (let i = 0; i < 5; i++) {
        let numero = leia.questionInt('escreva um numero ')
        if(i === 0){
            menor = numero;
            maior = numero;
        }   

        if (numero < menor) {
            menor = numero;
        }
        if (numero > maior) {
            maior = numero;
        }
    }
    console.log(`o maior valor é ${maior}`)
    console.log(`o menor valor é ${menor}`)
}
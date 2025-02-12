import leia from 'readline-sync'
export default function exercicio08() {
    let numero;
    let qtdNumeroRange = 0;
    do {
        numero = leia.questionInt("digite um numero ")
        if (numero > 100 && numero < 200){
            qtdNumeroRange++;
        }
    } while (numero !== 0);
    console.log(qtdNumeroRange)
}
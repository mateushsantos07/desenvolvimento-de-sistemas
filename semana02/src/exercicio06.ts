import leia from 'readline-sync'
export default function exercicio06() {

    let numero = leia.questionInt('digite um numero ')

    for (let i = 1; i <= 10; i++) {
        console.log(numero * i)
    }
}

import leia from 'readline-sync'
export default function exercicio02() {

    let numero = leia.questionInt('informe um numero ')

    for (let i = numero; i >= 0; i--) {
        console.log(i)
    }

}
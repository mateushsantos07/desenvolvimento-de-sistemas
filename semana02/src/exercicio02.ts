import leia from 'readline-sync'
export default function exercicio02() {

    let numero = leia.questionInt('informe um numero ')

    for (let i = 0; numero > i; i--) {
        console.log(i)
    }

}
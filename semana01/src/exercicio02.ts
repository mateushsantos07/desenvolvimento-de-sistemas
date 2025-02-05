import leia from 'readline-sync'    
export default function exercicio02(){
    let largura = leia.questionFloat('Informe o valor da largura do triangulo ')
    let altura = leia.questionFloat('Informe o valor da altura do triangulo ')

    let area = largura * altura /2

    console.log(`A área do triangulo vai ser ${area}`)
}
import leia from 'readline-sync'
export default function exercicio11(){
    
    let valor = leia.keyInSelect(['R$10', 'R$25', 'R$50', 'outro']) +1

    if(valor === 1){
        console.log('obrigado por sua doacao de R$10,00')
    }   else if (valor === 2){
        console.log('obrigado por sua doacao de R$25,00')
    } else if (valor === 3){
        console.log('obrigado por sua doacao de R$50,00')
    } else {
        let valor = leia.questionInt('digite o valor que quer doar ')
        console.log(`obrigado por sua doacao de R$${valor}`)
    }

}
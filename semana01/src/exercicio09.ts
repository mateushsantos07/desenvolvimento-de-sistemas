import leia from 'readline-sync'
export default function exercicio09(){
    let macas = leia.questionInt("quantas macas vc quer? ")

    let preco;

    if(macas < 12){
        preco = macas * 0.3
    } else {
        preco = macas * 0.25
    }

    console.log(`vc vai comprar ${macas} macas e vai pagar R$${preco}`)
}

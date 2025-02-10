import leia from 'readline-sync'
export default function exercicio12(){

    let produto = leia.questionInt("digite o valor do produto ")

    let m1r = leia.questionInt("quatnas moedas de um real vc tem ")
    let m50c = leia.questionInt("quatnas moedas de 50 centavo vc tem ")
    let m25c = leia.questionInt("quatnas moedas de 25 centavo vc tem ")
    let m10c = leia.questionInt("quatnas moedas de 10 centavo vc tem ")
    let m5c = leia.questionInt("quatnas moedas de 5 centavo vc tem ")


    let vtt = m1r + (m50c * 0.50) + (m25c * 0.25) + (m10c * 0.10) + (m5c * 0.05)

    if (vtt >= produto){
        console.log('vc consegue comprar o produto ')
    } else {
        console.log('vc não consegue comprar o produto ')
    }
}
import leia from 'readline-sync'  
export default function exercicio03(){
    let anos = leia.questionInt("Digite quantos anos de idade você tem ")
    let meses = leia.questionInt("Digite quantos meses de idade você tem ")
    let dias = leia.questionInt("Digite quantos dias de idade você tem ")

    let conversao = (anos *365) + (meses *30) + dias

    console.log(`Sua idade convertida para dias irá ser ${conversao} dias`)

}

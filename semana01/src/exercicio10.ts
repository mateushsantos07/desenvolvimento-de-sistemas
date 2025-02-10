import leia from 'readline-sync'
export default function exercicio10() {

    let pss1 = leia.question("qual seu nome? ")
    let prç1 = leia.questionInt("quanto vc gastou na loja?")

    let pss2 = leia.question("qual seu nome? ")
    let prç2 = leia.questionInt("quanto vc gastou na loja?")

    let vtp = prç1 + prç2;
    let vmp = (prç1 + prç2) / 2;

    console.log(`o preço total pago foi de ${vtp}, o valor médio foi de ${vmp}`)

    if (prç1 > 20) {
        console.log(`${pss1}, gastou mais de R$20,00`)
    }
    if (prç2 > 20) {
        console.log(`${pss2}, gastou mais de R$20,00`)
    }

}
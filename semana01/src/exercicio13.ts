import leia from 'readline-sync'
export default function exercicio13() {

    let idade = leia.questionInt("quantos anos vc tem? ")

    if (idade >= 18) {
        let nome = leia.question("qual o seu nome completo ")
        console.log(nome)
    } else {
        console.log("seus pais permitiram ?")
        let resposta = leia.keyInSelect(['sim', 'não']) + 1
        if (resposta === 1) {
            let nome = leia.question('digite seu nome completo ')
            console.log(nome)
        } else {
            console.log('vc não poderá ir ')
        }
    }

}
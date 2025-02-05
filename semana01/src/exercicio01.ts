import leia from 'readline-sync'
export default function exercicio01(){
    let numero = leia.questionInt("Digite um numero:")
    let antecessor = numero -1;
    console.log(`O numero digitado é ${numero} e seu antecessor é ${antecessor}`)
}
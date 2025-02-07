import leia from 'readline-sync'
export default function exercicio07(){
    let numero = leia.questionInt("digite um numero ")

    if(numero % 2===0){
        console.log("seu numero é par")
    } else {
        console.log("seu numero é impar")
    }
}
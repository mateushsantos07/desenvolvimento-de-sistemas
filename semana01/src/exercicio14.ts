import leia from 'readline-sync'
export default function exercicio14(){

    let gols1 = leia.questionInt('informe quantos gols o primeiro time fez na partida ')
    let gols2 = leia.questionInt('informe quantos gols o segundo time fez na partida ')

    const dif = Math.abs(gols1 - gols2)
    
    if(dif === 0 ){
        console.log('empate')
    }   else if(dif === 1 || dif === 2 || dif === 3){
        console.log('partida normal')
    }   else {
        console.log('goleada')
    }
}
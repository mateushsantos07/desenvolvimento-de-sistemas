import leia from 'readline-sync'
export default function exercicio04() {
    let eleitores = leia.questionInt('Informe o valor de eleitores ')
    let brancos = leia.questionInt('Informe o valor de votos branocos ')
    let nulos = leia.questionInt('Informe o valor de votos nulos ')

    let validos = eleitores - (brancos + nulos)

    let percentualValidos = (validos / eleitores) * 100;
    let percentualBranco = (brancos / eleitores) * 100;
    let percentualNulo = (nulos / eleitores) * 100;

    console.log(`\n Número de eleitroes: ${eleitores.toFixed(1)}`)
    console.log(`Número de votos brancos: ${brancos.toFixed(1)}`)
    console.log(`Número de votos nulos: ${nulos.toFixed(1)}`)
    console.log(`Percentual de votos validos: ${percentualValidos.toFixed(1)}%`)
    console.log(`Percentual de votos brancos: ${percentualBranco.toFixed(1)}%`)
    console.log(`Percentual de votos nulos: ${percentualNulo.toFixed(1)}% `)
}
import leia from 'readline-sync'
export default function exercicio05() {

    let celsius = leia.questionInt("Informe a temperatura em graus Celsius ")

    let far = celsius * 1.8 + 32;
    let kelvin = celsius + 273

    console.log(`${celsius}° em FAHRENHEIT É ${far}°F E EM KELVIN É ${kelvin}K`)

}

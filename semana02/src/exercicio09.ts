import leia from 'readline-sync'
export default function exercicio09() {
    let valentina = 1.50;
    let joaozinho = 1.40;
    let anos = 0;

    while (valentina >= joaozinho) {
        anos++;
        valentina += 0.02
        joaozinho += 0.03
    }
    console.log(`Em ${anos}, Joaozinho vai passar a Valentina`)
}

import leia from 'readline-sync'
export default function exercicio05() {
    let papel = 0;

    for (var i = 0; i < 500; i++) {
        papel = papel + 0.33;
        console.log(papel.toFixed(2));
    }
}

import leia from 'readline-sync'
export default function exercicio06() {

    let senha = leia.questionInt("Digite a senha ")

    
        if (senha === 1234) {
            console.log("acesso permitido")
        } else {
            console.log("acesso negado")
        }

    }

import leia from 'readline-sync'
export default function exercicio06() {

    const senhaCorreta = 1234
    let senha = leia.questionInt("Digite a senha ")

    
        if (senha === senhaCorreta) {
            console.log("acesso permitido")
        } else {
            console.log("acesso negado")
        }

    }

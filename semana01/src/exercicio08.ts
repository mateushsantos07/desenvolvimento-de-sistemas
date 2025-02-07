import leia from 'readline-sync'
export default function exercicio08(){
    let placa = leia.questionInt("digite o ultimo numero da placa do seu carro ")

    switch(placa){
        case 0:  
        case 1:
            console.log("seu carro não pode rodar na segunda")
            break;
        case 2:  
        case 3:
            console.log("seu carro não pode rodar na terça")
            break;
        case 4:  
        case 5:
            console.log("seu carro não pode rodar na quarta")
            break;
        case 6:  
        case 7:
            console.log("seu carro não pode rodar na quinta")
            break;
        case 8:  
        case 9:
            console.log("seu carro não pode rodar na sexta")
            break;
    }
}
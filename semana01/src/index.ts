import leia from 'readline-sync';
import exercicio01 from './exercicio01';
import exercicio02 from './exercicio02';
import exercicio03 from './exercicio03';
import exercicio04 from './exercicio04';
import exercicio05 from './exercicio05';
import exercicio06 from './exercicio06';
import exercicio07 from './exercicio07';
import exercicio08 from './exercicio08';
import exercicio09 from './exercicio09';
import exercicio10 from './exercicio10';

var opcao = leia.keyInSelect([
    "Exercicio 01",
    "Exercicio 02",
    "Exercicio 03",
    "Exercicio 04",
    "Exercicio 05",
    "Exercicio 06",
    "Exercicio 07",
    "Exercicio 08",
    "Exercicio 09",
    "Exercicio 10",
    "Exercicio 11",
    "Exercicio 12",
]) + 1;

switch (opcao) {
    case 1:
        exercicio01();
        break;
    case 2:
        exercicio02();
        break;
    case 3:
        exercicio03();
        break;
    case 4:
        exercicio04();
        break;
    case 5:
        exercicio05();
        break;
    case 6:
        exercicio06();
        break;
    case 7:
        exercicio07();
        break;
    case 8:
        exercicio08();
        break;
    case 9:
        exercicio09();
        break;
    case 10:
        exercicio10();
        break;
    case 9:
        exercicio;
        break;
    case 9:
        exercicio;
        break;
}
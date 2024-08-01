//Elabore um algoritmo em JavaScript, que a partir do Salário Bruto, o Adicional Noturno, as Horas Extras e os Descontos de um Colaborador, e exiba na tela o Salário Líquido. Utilize nesse exercício Arrow Function.

let sBruto: number = 2000;
let aNoturno: number = 500;
let hExtras: number = 5;
let descontos: number = 200;

let sLiquido = (sBruto: number, aNoturno: number, hExtras: number, descontos: number): number => sBruto + aNoturno + (hExtras * 100) - descontos;

console.log(`${sLiquido(sBruto, aNoturno, hExtras, descontos)}`)
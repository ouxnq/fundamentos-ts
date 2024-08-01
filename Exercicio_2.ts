//Informe quatro valores (n1, n2, n3, n4). A seguir, calcule e mostre a diferença do produto entre o n1 e n2 pelo produto entre o n3 e o n4. Utiliza nesse exercício o conceito de Interpolação na exibição dos dados.
let n1: number = 5;
let n2: number = 6;
let n3: number = 7;
let n4: number = 8;

let diferenca = (n1: number, n2: number, n3: number, n4: number): number => (n1 * n2) - (n3 * n4)

console.log(`Diferença: ${diferenca(n1, n2, n3, n4)}`)
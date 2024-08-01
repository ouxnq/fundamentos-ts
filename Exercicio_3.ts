//Utilizando o conceito de Interfaces do TypeScript, construa uma Interface chamada IVeiculos que possua 3 atributos, em seguida crie 2 objetos que possua essa tipagem e exiba os atributos em tela. Veja os exemplos abaixo
interface IVeiculos {
    nome: string,
    marca: string,
    ano: number
}
let v1: IVeiculos = {
    nome: "Avião",
    marca: "Boing",
    ano: 2024
}

let v2: IVeiculos = {
    nome: "Carro",
    marca: "Subaru",
    ano: 2016
}

console.log(`O primeiro veículo é um ${v1.nome}, da marca ${v1.marca} e do ano ${v1.ano}`)
console.log(`O segundo veículo é um ${v2.nome}, da marca ${v2.marca} e do ano ${v2.ano}`)
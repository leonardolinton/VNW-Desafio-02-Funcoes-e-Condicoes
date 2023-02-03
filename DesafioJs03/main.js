// 01- Crie um array que receba 5 itens e exiba no console.
console.log("---------------------------- EX-01 ----------------------------");
const kages = ["Hokage", "Kazekage", "Raikage", "Mizukage", "Tsuchikage"];
console.log(`Lista de Kages em Naruto:`);
for (let i = 0; i < kages.length; i++) {
  console.log(`${i + 1}-${kages[i]}`);
}

// 02- Utilize um método para adicionar um nome ao inicio do array.
console.log("---------------------------- EX-02 ----------------------------");
const powerRangers = ["Vermelho", "Azul", "Rosa", "Preto", "Amarelo"];
powerRangers.push("Verde");
console.log(`Cores de Power Rangers:`);
for (let i = 0; i < powerRangers.length; i++) {
  console.log(`${i + 1}-${powerRangers[i]}`);
}

// 03- Utilize um método para remover o último nome do array.
console.log("---------------------------- EX-03 ----------------------------");
const kimetsu = ["Tanjiro", "Zenitsu", "Inosuke", "Nezuko"];
kimetsu.pop();
console.log(`Protagonistas de Kimetsu no Yaiba:`);
for (let i = 0; i < kimetsu.length; i++) {
  console.log(`${i + 1}-${kimetsu[i]}`);
}

// 04- Utilize um método para adicionar dois nomes ao fim do array.
console.log("---------------------------- EX-04 ----------------------------");
const jujutsu = ["Yuji Itadori"];
jujutsu.push("Megumi Fushiguro", "Nobara Kugisaki");
console.log(`Protagonistas de Jujutsu Kaisen:`);
for (let i = 0; i < jujutsu.length; i++) {
  console.log(`${i + 1}-${jujutsu[i]}`);
}
// 05- Utilize um método para remover o primeiro nome do array.
console.log("---------------------------- EX-05 ----------------------------");
const avengers = ["Hulk", "Capitão America", "Homem de Ferro", "Thor"];
avengers.shift();
console.log(`Vingadores:`);
for (let i = 0; i < avengers.length; i++) {
  console.log(`${i + 1}-${avengers[i]}`);
}

// 06 Utilize um método para organizar em ordem crescente o seguinte array:
console.log("---------------------------- EX-06 ----------------------------");
let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];
numbers.sort((a, b) => a - b);
console.log(numbers);

// 07 Crie um objeto que receba ao menos três propriedades sobre você.
console.log("---------------------------- EX-07 ----------------------------");
const sobremim = { nome: "Leonardo", sobrenome: "Linton", idade: 30 };
console.log(sobremim);

// 08 Adicione uma nova propriedade sem alterar seu objeto inicial.
console.log("---------------------------- EX-08 ----------------------------");
sobremim.altura = 1.7;
console.log(sobremim);

// 09 Remova uma propriedade desse objeto.
// 10-Mostre no console todas as propriedades desse objeto.
console.log(
  "---------------------------- EX-09 | EX-10 ----------------------------"
);
delete sobremim.altura;
console.log(sobremim);

// 11-Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
// Na propriedade amigos, adicione ao menos 4 itens.
console.log("---------------------------- EX-11 ----------------------------");
const cadastro = [];

cadastro.push({
  nome: "Joyce",
  idade: 26,
  telefone: "(21) 91111-1111",
  amigos: ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"],
});

cadastro.push({
  nome: "Leonardo",
  idade: 30,
  telefone: "(21) 99999-9999",
  amigos: ["Goku", "Naruto", "Luffy", "Shiryu"],
});

console.log(cadastro);

// 12- Mostre no console o nome de um amigo de cada lista.
console.log("---------------------------- EX-12 ----------------------------");
console.log("AMIGOS:");
console.log(cadastro[0].amigos[0]);
console.log(cadastro[1].amigos[1]);

// Declaração de variaveis
let numero = 5;
let nome = "Leonardo";
let idade = 30;
let estiloMusical = "Metal";
let musica = "Warrior - Disturbed";
let filme = "Gigante de Ferro";

//1 - crie uma função que exiba uma mensagem no console
console.log(
  "---------------------------- FUNÇÃO - 01 ----------------------------"
);
function exibirMenssagem() {
  console.log(`Olá Mundo!!!`);
}
exibirMenssagem();

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
console.log(
  "---------------------------- FUNÇÃO - 02 ----------------------------"
);
function exibirNome(name) {
  console.log(`Nome: ${name}`);
}
exibirNome(nome);

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
console.log(
  "---------------------------- FUNÇÃO - 03 ----------------------------"
);
function sobreMim(name, age, styleMusic) {
  exibirNome(name);
  console.log(`Idade: ${age}`);
  console.log(`Estilo Músical: ${styleMusic}`);
}
sobreMim(nome, idade, estiloMusical);

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
console.log(
  "---------------------------- FUNÇÃO - 04 ----------------------------"
);
function exibirFilmeMusica(name, age, styleMusic, film, music) {
  sobreMim(name, age, styleMusic);
  console.log(`Música: ${music}`);
  console.log(`Filme: ${film}`);
}
exibirFilmeMusica(nome, idade, estiloMusical, filme, musica);

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função=
console.log(
  "---------------------------- FUNÇÃO - 05 ----------------------------"
);
function retornarTriplo(num) {
  console.log(`${num} X 3 = ${num * 3}`);
}
retornarTriplo(numero);

//6 - crie uma função que  verifique se uma  variável é true ou false
console.log(
  "---------------------------- FUNÇÃO - 06 ----------------------------"
);
function verificarVerdadeiroOuFalso(music) {
  return music === "Funk";
}
console.log(verificarVerdadeiroOuFalso(musica));

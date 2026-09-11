const prompt = require("prompt-sync")();

let soma = 0;
let valorDigitado = -1;

while (valorDigitado !== 0) {
  valorDigitado = Number(prompt("Manda um número aí (digite 0 pra parar):"));
  soma += valorDigitado;
}
console.log("A soma final deu: " + soma);
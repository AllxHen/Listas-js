let soma = 0;
let num = -1;
while (num !== 0) {
  num = Number(prompt("Digite um número (0 para encerrar):"));
  soma += num;
}
console.log("Soma total: " + soma);
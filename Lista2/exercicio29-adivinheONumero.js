let secreto = 42;
let palpite = -1;
let tentativas = 0;
while (palpite !== secreto && tentativas < 5) {
  palpite = Number(prompt("Tentativa " + (tentativas + 1) + " de 5 - Seu palpite:"));
  tentativas++;
  if (palpite === secreto) {
    console.log("Parabéns! Você acertou em " + tentativas + " tentativa(s).");
    break;
  } else if (palpite > secreto) {
    console.log("Tente um número MENOR.");
  } else {
    console.log("Tente um número MAIOR.");
  }
}
if (palpite !== secreto) {
  console.log("Fim de jogo. O número era " + secreto + ".");
}
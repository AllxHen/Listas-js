const prompt = require("prompt-sync")();

let numeroEscondido = 42;
let chuteDoCara = -1;
let vezesTentadas = 0;

while (chuteDoCara !== numeroEscondido && vezesTentadas < 5) {
  chuteDoCara = Number(prompt("Tentativa " + (vezesTentadas + 1) + " de 5. Qual o seu palpite?"));
  vezesTentadas++;
  
  if (chuteDoCara === numeroEscondido) {
    console.log("que cagada, acertou de primeira");
    break;
  } else if (chuteDoCara > numeroEscondido) {
    console.log("Foi longe, o número é menor.");
  } else {
    console.log("baixo, tenta um maior");
  }
}

if (chuteDoCara !== numeroEscondido) {
  console.log("o numero escondido era:" + numeroEscondido);
}
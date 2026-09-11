const prompt = require("prompt-sync")();

const senha = prompt("Digite a senha:");

if (senha === "1234") {
  console.log("Acesso permitido!");
} else {
  console.log("Senha incorreta.");
}

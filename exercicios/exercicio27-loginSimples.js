const prompt = require("prompt-sync")();

const user = prompt("Usuário:");
const pass = prompt("Senha:");

if (user === "admin" && pass === "1234") {
  console.log("Login feito com sucesso!");
} else {
  console.log("Usuário ou senha incorretos.");
}

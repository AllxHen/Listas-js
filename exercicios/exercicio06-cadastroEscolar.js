const prompt = require("prompt-sync")();

const mat = Number(prompt("Matrícula:"));
const nome = prompt("Nome:");
const turma = prompt("Turma:");

console.log("Aluno " + nome + " (matrícula " + mat + ") cadastrado na turma " + turma + ".");
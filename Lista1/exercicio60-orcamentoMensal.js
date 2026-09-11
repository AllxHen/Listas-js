const prompt = require("prompt-sync")();

const ganho = Number(prompt("Ganhos do mês:"));
const gasto = Number(prompt("Gastos do mês:"));

const saldo = ganho - gasto;

console.log("Saldo do mês: R$ " + saldo);

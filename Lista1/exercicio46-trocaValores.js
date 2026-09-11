const prompt = require("prompt-sync")();

let a = prompt("Valor A:");
let b = prompt("Valor B:");

let temp = a;
a = b;
b = temp;

console.log("A agora é " + a + " e B agora é " + b);

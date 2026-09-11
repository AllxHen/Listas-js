const prompt = require("prompt-sync")();

const c = Number(prompt("Temperatura em °C:"));

const f = (c * 9/5) + 32;

console.log(c + "°C equivalem a " + f + "°F");
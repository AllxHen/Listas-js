let idades = [18, 22, 25, 30, 40, 15];
let soma = 0;
for (let i = 0; i < idades.length; i++) {
  soma += idades[i];
}
console.log("A idade média é: " + (soma / idades.length).toFixed(1) + " anos.");
let precos = [100, 250, 50, 80];
let precosComDesconto = [];
for (let i = 0; i < precos.length; i++) {
  precosComDesconto.push(precos[i] * 0.90);
}
console.log("Preços originais: " + precos);
console.log("Preços com desconto: " + precosComDesconto);
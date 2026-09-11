let estoque = [
  {nome: "Caderno", preco: 15.0, qtd: 50},
  {nome: "Caneta", preco: 3.5, qtd: 100},
  {nome: "Mochila", preco: 120.0, qtd: 20}
];
let vendas = [
  [5, 2, 0, 1, 3, 0, 4], // Caderno (7 dias)
  [10, 5, 2, 8, 4, 1, 6], // Caneta
  [1, 0, 0, 2, 1, 0, 1]   // Mochila
];
function calcValorVendido(prodIndex) {
  let totalVendidos = 0;
  for (let i = 0; i < vendas[prodIndex].length; i++) {
    totalVendidos += vendas[prodIndex][i];
  }
  return totalVendidos * estoque[prodIndex].preco;
}
let maiorValor = 0;
let produtoDestaque = "";
for (let i = 0; i < estoque.length; i++) {
  let total = calcValorVendido(i);
  console.log("Faturamento - " + estoque[i].nome + ": R$ " + total.toFixed(2));
  if (total > maiorValor) {
    maiorValor = total;
    produtoDestaque = estoque[i].nome;
  }
}
console.log("O produto que gerou maior receita foi: " + produtoDestaque + " (R$ " + maiorValor.toFixed(2) + ")");
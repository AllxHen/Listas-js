function converterParaDolar(reais) {
  let cotacao = 5.20;
  return reais / cotacao;
}
let valor = 100;
console.log("R$ " + valor + " equivalem a U$ " + converterParaDolar(valor).toFixed(2));
function converterParaDolar(valorEmReais) {
  let cotacaoHoje = 5.20;
  return valorEmReais / cotacaoHoje;
}
let grana = 100;
console.log("Meus R$ " + grana + " viraram U$ " + converterParaDolar(grana));
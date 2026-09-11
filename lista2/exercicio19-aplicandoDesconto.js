let precosAntigos = [100, 250, 50, 80];

let precosNovos = [];

for (let contadora = 0; contadora < precosAntigos.length; contadora++) {
  let comDesconto = precosAntigos[contadora] * 0.90;
  precosNovos.push(comDesconto);
}

console.log("Sem desconto: " + precosAntigos);
console.log("Com desconto de 10%: " + precosNovos);
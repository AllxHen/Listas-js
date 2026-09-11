let precos = [10, 25, 40, 15, 60, 30, 5];
let ref = 25;
let contAcima = 0, somaAbaixo = 0;
for (let p of precos) {
  if (p > ref) contAcima++;
  else if (p < ref) somaAbaixo += p;
}
console.log("Preços acima de " + ref + ": " + contAcima);
console.log("Soma dos preços abaixo de " + ref + ": R$ " + somaAbaixo);
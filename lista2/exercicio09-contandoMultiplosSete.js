let quantMultiplos = 0;

for (let contadora = 1; contadora <= 50; contadora++) {
  if (contadora % 7 === 0) {
    quantMultiplos++;
  }
}
console.log("Achei " + quantMultiplos + " múltiplos de 7");
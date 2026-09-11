let cont = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 7 === 0) {
    cont++;
  }
}
console.log("Total de múltiplos de 7 encontrados: " + cont);
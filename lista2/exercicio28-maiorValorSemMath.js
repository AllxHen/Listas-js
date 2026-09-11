function buscarMaior(vetorzinho) {
  let oMaior = vetorzinho[0];
  for (let contadora = 1; contadora < vetorzinho.length; contadora++) {
    if (vetorzinho[contadora] > oMaior) {
      oMaior = vetorzinho[contadora];
    }
  }
  return oMaior;
}

console.log("Desses números soltos aí, o maior é o " + buscarMaior([4, 15, 2, 8, 23, 7]));
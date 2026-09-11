function somarListaInteira(listaDeNumeros) {
  let total = 0;
  for (let contadora = 0; contadora < listaDeNumeros.length; contadora++) {
    total += listaDeNumeros[contadora];
  }
  return total;
}

let meusNumeros = [10, 20, 30, 40];
console.log("O total somado no vetor foi: " + somarListaInteira(meusNumeros));
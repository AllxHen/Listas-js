function maiorValor(arr) {
  let maior = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maior) {
      maior = arr[i];
    }
  }
  return maior;
}
console.log("O maior valor é: " + maiorValor([4, 15, 2, 8, 23, 7]));
function somarVetor(vetor) {
  let soma = 0;
  for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i];
  }
  return soma;
}
let meusNumeros = [10, 20, 30, 40];
console.log("A soma do vetor é: " + somarVetor(meusNumeros));
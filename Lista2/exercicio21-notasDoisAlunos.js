let notas = [[7, 8, 9], [5, 6, 4]];
for (let i = 0; i < notas.length; i++) {
  let soma = 0;
  for (let j = 0; j < notas[i].length; j++) {
    soma += notas[i][j];
  }
  console.log("Média do Aluno " + (i + 1) + ": " + (soma / notas[i].length).toFixed(1));
}
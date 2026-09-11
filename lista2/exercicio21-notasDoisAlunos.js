let notasDosAlunos = [
  [7, 8, 9], 
  [5, 6, 4]
];

for (let contadora = 0; contadora < notasDosAlunos.length; contadora++) {
  let somaNotas = 0;
  
  for (let contadora2 = 0; contadora2 < notasDosAlunos[contadora].length; contadora2++) {
    somaNotas += notasDosAlunos[contadora][contadora2];
  }
  
  let media = somaNotas / notasDosAlunos[contadora].length;
  console.log("Média do Aluno " + (contadora + 1) + " deu " + media.toFixed);
}